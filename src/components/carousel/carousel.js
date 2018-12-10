import React, { Component } from 'react'
import styles from './carousel.module.css'
import Img from 'gatsby-image'
import { FaArrowRight } from 'react-icons/fa'
import { FaArrowLeft } from 'react-icons/fa'

class carousel extends Component {
  state = {
    image1: true,
    image2: false,
    image3: false,
    image4: false,
  }

  handleClick = divNumber => {
    this.setState({ div1: false, div2: false, div3: false }, () => {
      this.setState({ [divNumber]: true }, () => {
        if (this.state.div1) {
          this.setState({ resolver: 'featured' })
        } else if (this.state.div2) {
          this.setState({ resolver: 'robots' })
        } else if (this.state.div3) {
          this.setState({ resolver: 'programming' })
        }
      })
    })
  }

  render() {
    let count = 0
    return (
      <div className={styles.container}>
        <FaArrowLeft size={40} className={styles.FaArrowLeft} />
        <div className={styles.imageContainer}>
          {this.props.images.map(
            (image, index) => (
              (count = index + 1),
              (name = 'image' + count),
              console.log(name),
              (
                <div
                  className={this.state[name] ? styles[name] : null}
                  key={index}
                >
                  <Img
                    fluid={image.childImageSharp.fluid}
                    alt={image.name}
                    className={styles.image}
                  />
                </div>
              )
            )
          )}
        </div>
        <FaArrowRight size={40} className={styles.FaArrowRight} />
      </div>
    )
  }
}

export default carousel
