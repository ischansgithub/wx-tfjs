import * as face from '@tensorflow-models/face-landmarks-detection';
import * as tf from '@tensorflow/tfjs-core'
import { getFrameSliceOptions } from '../utils/util';
import { lipsLowerPointSeries, lipsUpperPointSeries } from './annotations';
import { drawKeyAreaByPoints, drawKeypoints } from './util';

let model: face.FaceLandmarksDetector;

export const load = async () => {
  model = await face.load();

  await model.estimateFaces({
    input: tf.zeros([128, 128, 3])
  });
};

export const isReady = () => {
  return !!model;
};

export const detectFaces = async (frame: any, displaySize: { height: number, width: number }) => {
  const temp = tf.browser.fromPixels({
    data: new Uint8Array(frame.data),
    width: frame.width,
    height: frame.height,
  }, 4);
  const sliceOptions = getFrameSliceOptions(frame.width, frame.height, displaySize.width, displaySize.height);

  const pixels = await tf.tidy(() => {
    return tf.image.resizeBilinear(tf.slice(temp, sliceOptions.start, sliceOptions.size), [displaySize.height, displaySize.width])
  });

  // since images are being fed from a webcam
  const flipHorizontal = false
  const faces = await model.estimateFaces({
    input: pixels,
    flipHorizontal
  });

  temp.dispose();
  pixels.dispose();

  return faces;
}

export const drawFaces = (ctx: WechatMiniprogram.CanvasContext, faces: face.FaceLandmarksPrediction[]) => {
  if (!ctx || !faces) {
    return;
  }

  faces.forEach(face => {
    drawKeypoints(face.scaledMesh as [number, number, number][], ctx);
  })

  ctx.draw();
}

// export const drawLipstick = (ctx: WechatMiniprogram.CanvasContext, faces: face.FaceLandmarksPrediction[], color: string) => {
//   if (!ctx || !faces) {
//     return;
//   }

//   faces.forEach(face => {
//     drawKeyAreaByPoints(lipsUpperPointSeries.map(point => (face.scaledMesh as [number, number, number][])[point]), ctx, color);
//     drawKeyAreaByPoints(lipsLowerPointSeries.map(point => (face.scaledMesh as [number, number, number][])[point]), ctx, color);
//   })

//   ctx.draw();
// }

export const drawLipstick = (
  ctx: WechatMiniprogram.CanvasContext,
  faces: face.FaceLandmarksPrediction[],
  color: string
) => {
  if (!ctx || !faces || faces.length === 0) {
    return;
  }

  const drawKeyAreaForFace = (points: [number, number, number][], ctx: WechatMiniprogram.CanvasContext) => {
    drawKeyAreaByPoints(points, ctx, color);
  };

  faces.forEach((face) => {
    const scaledMesh = face.scaledMesh as [number, number, number][];
    const upperLipPoints = lipsUpperPointSeries.map((point) => scaledMesh[point]);
    const lowerLipPoints = lipsLowerPointSeries.map((point) => scaledMesh[point]);

    drawKeyAreaForFace(upperLipPoints, ctx);
    drawKeyAreaForFace(lowerLipPoints, ctx);
  });

  ctx.draw();
};

export const chenww_drawLipstick = (
  ctx: WechatMiniprogram.CanvasContext,
  faces: face.FaceLandmarksPrediction[],
  color: string
): { [key: string]: number } => {

  const resultObject: { [key: string]: number } = {};

  if (!ctx || !faces || faces.length === 0) {
    return resultObject;
  }

  const drawKeyAreaForFace = (points: [number, number, number][], ctx: WechatMiniprogram.CanvasContext) => {
    drawKeyAreaByPoints(points, ctx, color);
  };

  const resultArray: { [key: string]: number }[] = [];

  faces.forEach((face) => {
    const scaledMesh = face.scaledMesh as [number, number, number][];
    const upperLipPoints = lipsUpperPointSeries.map((point) => scaledMesh[point]);
    const lowerLipPoints = lipsLowerPointSeries.map((point) => scaledMesh[point]);

    // 使用 reduce 来累加每个数组中第一个和第二个元素，也即x轴坐标、y轴坐标的累加值
    const sum_x_upper = upperLipPoints.reduce((acc, currentArray) => acc + currentArray[0], 0);
    const sum_y_upper = upperLipPoints.reduce((acc, currentArray) => acc + currentArray[1], 0);
    const sum_x_lower = lowerLipPoints.reduce((acc, currentArray) => acc + currentArray[0], 0);
    const sum_y_lower = lowerLipPoints.reduce((acc, currentArray) => acc + currentArray[1], 0);

    // 计算平均值，除以数组的长度
    const average_x_upper = sum_x_upper / upperLipPoints.length;
    const average_y_upper = sum_y_upper / upperLipPoints.length;
    const average_x_lower = sum_x_lower / lowerLipPoints.length;
    const average_y_lower = sum_y_lower / lowerLipPoints.length;
    // console.log(average_x, average_y)
    // 计算上下嘴唇的距离
    const mouthSize = Math.abs(average_y_upper - average_y_lower)
    console.log(mouthSize)

    resultObject["mouthOpen"] = mouthSize > 10 ? 1 : 0;

  });
  return resultObject
};

