import "./news-details.scss";

export function NewsDetails() {
  return (
    <main className="news-details">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-md-10 col-sm-10">
            <div className="news-details-item">
              <div className="news-details-header">
                <h1 className="title">
                  The Ultimate Guide to Bali: What to See, Do, and Eat
                </h1>

                <div className="d-flex section justify-content-between">
                  <div className="content">
                    <span className="author">By Antonio Gabriel,</span>
                    <span className="category">
                      Category <small>Innovation</small>
                    </span>
                  </div>
                  <span className="date">12/04/2023 13:40</span>
                </div>

                <img
                  src="https://images.unsplash.com/photo-1686599034091-aebcd02e661e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                  alt=""
                  className="img-fluid image"
                />

                <h2 className="subtitle">
                  Malesuada egestas nunc vestibulum egestas mauris augue tempor
                  scelerisque eros.
                </h2>
              </div>

              <div className="news-details-body">
                <div className="descripiton">
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum' will uncover many web
                    sites still in their infancy. Various versions have evolved
                    over the years, sometimes by accident, sometimes on purpose
                    (injected humour and the like).
                  </p>

                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum' will uncover many web
                    sites still in their infancy. Various versions have evolved
                    over the years, sometimes by accident, sometimes on purpose
                    (injected humour and the like).
                  </p>

                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum' will uncover many web
                    sites still in their infancy. Various versions have evolved
                    over the years, sometimes by accident, sometimes on purpose
                    (injected humour and the like). It is a long established
                    fact that a reader will be distracted by the readable
                    content of a page when looking at its layout. The point of
                    using Lorem Ipsum is that it has a more-or-less normal
                    distribution of letters, as opposed to using 'Content here,
                    content here', making it look like readable English. Many
                    desktop publishing packages and web page editors now use
                    Lorem Ipsum as their default model text, and a search for
                    'lorem ipsum' will uncover many web sites still in their
                    infancy. Various versions have evolved over the years,
                    sometimes by accident, sometimes on purpose (injected humour
                    and the like).
                  </p>
                </div>

                <h5>Thanks for read !!!</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
