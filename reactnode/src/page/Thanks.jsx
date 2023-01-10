export const Thanks = ()=>{
  return (
    <>
      <div className="container">
        <div className="container_content">
          <div className="container_content_inner">
            <div className="par">
              <p className="pt"> Thanks for watching</p>
            </div>
            <div className="btns">
              <button className="btns_more">
                <a
                  target="_blank"
                  href="https://assets.publishing.service.gov.uk/government/uploads/system/uploads/image_data/file/86395/s960_thank_you_sticky_note.jpg"
                >
                  See Here
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="container_outer_img">
          <div className="img-inner">
            <img
              src="https://play-lh.googleusercontent.com/byWYUg5XITQ3pIFd2uqgxvsM4ecnpNvj_9gE99JJPEKicjGDXOL_3RYcRxxzcartzA"
              alt=""
              className="container_img"
            />
          </div>
        </div>
      </div>
      <div className="overlay"></div>
    </>
  );
}