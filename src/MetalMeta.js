import data from './metal.json';

function MetalMeta() {
  const numberOfBands = data.length;
  return(
      <div className='MetalMeta'>
          <p>Total # of Bands: { numberOfBands }</p>
          <p>Total # of Styles: 47</p>
      </div>
  )
}
export default MetalMeta;
