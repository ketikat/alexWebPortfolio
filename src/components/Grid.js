import React, {Component} from 'react'
import Blazy from 'blazy'

// couldn't find suitable npm library to use as a grid component... so had to used 'reactrpg' npm module as template & modified it...
function ReactRpg(props) {

    const imagesArray = props.imagesArray
    const padding = props.padding || 3
    const columns = props.columns || [3, 2, 1]
    const paddingBottom= props.paddingBottom || '100%'
    const imgFitting= props.imgFitting || 'cover'
    const clickHandler = props.clickHandler || null


    const cssBreakpoints = {
      Main: '' + Math.floor(100 / columns[0]) + '%;',
      width480: '' + Math.floor(100 / columns[1]) + '%;',
      width992: '' + Math.floor(100 / columns[2]) + '%;',
    }

    const imageNodes = imagesArray.map( (img, index) => {
      return (<ReactRpgPhoto  imgFitting={imgFitting} paddingBottom={paddingBottom} key={index} url={img.url} columns={columns} padding={padding} clickHandler={img.clickHandler}/> )
    })

    return (
      <div className='imageGrid'>

        {imageNodes}

        <style dangerouslySetInnerHTML={{__html: `
            .imageGridItem {
              width: ${cssBreakpoints.Main}
            },
            @media only screen and (min-width : 480px)
            .imageGridItem {
              width: ${cssBreakpoints.width480}
            },
            @media only screen and (min-width : 992px)
            .imageGridItem {
              width: ${cssBreakpoints.width992}
            }
        `}}/>
      </div>
    )
}


class ReactRpgPhoto extends Component {

  constructor(props){
    super(props)
    this.state = {
    }
  }

  //  componentDidMount() {
  //   new Blazy({
  //       selector: '.b-lazy'
  //   })
  // }

  render () {
  const imgFitting= this.props.imgFitting || 'cover'
  const paddingBottom= this.props.paddingBottom || '100%'
  const url = this.props.url
  const padding = this.props.padding
  const clickHandler = this.props.clickHandler || null
  const pointer = this.props.pointer || 'auto'

  const styles = {
    imageGridItem: {
      display: 'inline-block',
      boxSizing: 'border-box',
      float: 'left',
      padding: padding
    },
    imageWrapper: {
      position: 'relative',
      width: '100%',
      paddingBottom: `${paddingBottom}`,
      backgroundImage: 'url(' + url + ')',
      backgroundSize: `${imgFitting}`,
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      cursor: pointer
    }
  }
    return(
          <div className='imageGridItem' style={styles.imageGridItem} onClick={clickHandler}>
            <div className='imageWrapper' style={styles.imageWrapper}>
            </div>
          </div>
      )
  }

}


export default ReactRpg
