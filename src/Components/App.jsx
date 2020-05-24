import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import getData from '../utils/data';
import { scrollDown } from '../utils/scrollDown'
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader'

export default class App extends Component {

    state = {
        imgArr: [],
        input: '',
        page: 1,
        openModal: false,
        modalImg: '',
        load: false,
    }

    hanldeSearchQuery = ( e ) => {
        this.setState( {
            [e.target.name]: e.target.value
        } )

        if( e.target.value !== this.state.input ) {
            this.setState( { imgArr: [] } )
        }
    }

    handleSubmit = ( e ) => {
        e.preventDefault();
        this.setState( { load: true } )
        const { input, page } = this.state;

        getData( input, page )
            .then( response => {
                const data = response.data.hits;
                !this.state.imgArr.length
                    ? this.setState( { imgArr: [...data] } )
                    : this.setState( prevState => {
                        return {
                            imgArr: [...prevState.imgArr, ...data]
                        }
                    } )
            } )
            .catch( err => console.log( err ) )
            .finally( () => {
                this.setState( { load: false } )
            } )
    }

    handleLoadMore = ( e ) => {
        this.setState( prevState => ( { page: prevState.page + 1 } ) );
        this.handleSubmit( e )
    }

    handleOpenModal = ( { target } ) => {
        this.setState( {
            openModal: true,
            modalImg: target.currentSrc
        } )
    }

    handleCloseModal = ( { target } ) => {
        if( target.localName !== 'img' ) {
            this.setState( { openModal: false } )
        }
    }

    componentDidUpdate = ( prevState ) => {
        const { page } = this.state;
        if( page > 1 && this.state.load === true ) {
            scrollDown();
        }
    }

    render () {
        const { imgArr, input, openModal, modalImg, load } = this.state;
        return (
            <div>
                <Searchbar
                    handleSubmit={this.handleSubmit}
                    hanldeSearchQuery={this.hanldeSearchQuery}
                    input={input}
                />
                <ImageGallery
                    imgArr={imgArr}
                    openModal={this.handleOpenModal}
                />
                {!!imgArr.length && <Button loadMore={this.handleLoadMore} />}
                {openModal === true && <Modal
                    onOpenModal={modalImg}
                    onCloseModal={this.handleCloseModal}
                />}
                {load === true && <Loader />}
            </div>
        )
    }
}