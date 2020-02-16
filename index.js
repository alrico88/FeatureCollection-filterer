/**
 * @typedef Feature
 * @property {'Feature'} type
 * @property {object} geometry
 * @property {object} properties
 */

class FeatureCollection {

  /**
   *Creates an instance of FeatureCollection.
   * @param {Feature[]} features
   * @memberof FeatureCollection
   */
  constructor(features) {
    this.type = 'FeatureCollection';
    this.features = features;
  }
}

/**
 * Filters GeoJSON FeatureCollection based on condition
 *
 * @param {FeatureCollection} GeoJSON GeoJSON to filter
 * @param {Function} condition Accesor function to filter features by. ex: (d) => d.properties.altitude > 400
 */
function filter(GeoJSON, condition) {
  if (GeoJSON.type !== 'FeatureCollection') {
    throw new Error('Only GeoJSON FeatureCollections are supported');
  }
  return new FeatureCollection(GeoJSON.features.filter(condition));
}

module.exports = filter;
