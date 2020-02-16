const filterer = require('./index');

const TEST_FEATURECOLLECTION = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {
        altitude: 300,
      },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-3.706512451171875, 40.420074462890625],
            [-3.70513916015625, 40.420074462890625],
            [-3.70513916015625, 40.42144775390625],
            [-3.706512451171875, 40.42144775390625],
            [-3.706512451171875, 40.420074462890625],
          ],
        ],
      },
    },
    {
      type: 'Feature',
      properties: {
        altitude: 500,
      },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-3.706512451171875, 40.420074462890625],
            [-3.70513916015625, 40.420074462890625],
            [-3.70513916015625, 40.42144775390625],
            [-3.706512451171875, 40.42144775390625],
            [-3.706512451171875, 40.420074462890625],
          ],
        ],
      },
    },
    {
      type: 'Feature',
      properties: {
        altitude: 100,
      },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-3.706512451171875, 40.420074462890625],
            [-3.70513916015625, 40.420074462890625],
            [-3.70513916015625, 40.42144775390625],
            [-3.706512451171875, 40.42144775390625],
            [-3.706512451171875, 40.420074462890625],
          ],
        ],
      },
    },
  ],
};

const TEST_FEATURECOLLECTION_RESULT = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {
        altitude: 500,
      },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-3.706512451171875, 40.420074462890625],
            [-3.70513916015625, 40.420074462890625],
            [-3.70513916015625, 40.42144775390625],
            [-3.706512451171875, 40.42144775390625],
            [-3.706512451171875, 40.420074462890625],
          ],
        ],
      },
    },
  ],
};

test('Same filter operation should always output the same GeoJSON FeatureCollection', () => {
  expect(filterer(TEST_FEATURECOLLECTION, (d) => d.properties.altitude > 300)).toEqual(TEST_FEATURECOLLECTION_RESULT);
});
