import React from 'react'

const VideoContainer = ({VideoData}) => {
    // console.log(VideoData)
    return (
        <section className="alumniSection">
            <div className="container">
                <h1 className="heading02 text-center">{VideoData.title}</h1>
                <div className="video">
                    <div className='iframe-box'>
                        <iframe src={VideoData.link} frameborder="0"></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VideoContainer