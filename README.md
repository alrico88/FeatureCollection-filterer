## Functions

<dl>
<dt><a href="#filter">filter(GeoJSON, condition)</a></dt>
<dd><p>Filters GeoJSON FeatureCollection based on condition</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#Feature">Feature</a></dt>
<dd></dd>
</dl>

<a name="filter"></a>

## filter(GeoJSON, condition)

Filters GeoJSON FeatureCollection based on condition

**Kind**: global function

| Param     | Type                           | Description                                                                    |
| --------- | ------------------------------ | ------------------------------------------------------------------------------ |
| GeoJSON   | <code>FeatureCollection</code> | GeoJSON to filter                                                              |
| condition | <code>function</code>          | Accesor function to filter features by. ex: (d) => d.properties.altitude > 400 |

<a name="Feature"></a>

## Feature

**Kind**: global typedef  
**Properties**

| Name       | Type                             |
| ---------- | -------------------------------- |
| type       | <code>&#x27;Feature&#x27;</code> |
| geometry   | <code>object</code>              |
| properties | <code>object</code>              |
