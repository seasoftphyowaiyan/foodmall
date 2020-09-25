import React from "react";
import Articles from "../../data/articles.json";

const LatestArticle = () => {
  const FilteredArticles = Articles.map(
    ({ created_at }) => new Date(created_at).getTime() / 1000
  )
    .sort((a, b) => a - b)
    .reverse();

  //   const Sort = FilteredArticles.map((item) => item)
  //     .sort((a, b) => a.created_at - b.created_at)
  //     .reverse();
  // .sort((a, b) => a.created_at - b.created_at)
  // .reverse();

  console.log(FilteredArticles);
  return (
    <div className="row">
      {/* {Sort.map((article) => (
        <div className="col-md-6" key={article.id}>
          <div
            className={`popular_img ${
              article.popular == true ? "active" : null
            }`}
          ></div>

          <div className="card mb-3 shop_list">
            <div className="row no-gutters">
              <div className="col-md-3 p-3">
                <div
                  className="p-1"
                  style={{ border: "1px solid #ededed", maxWidth: 160 }}
                >
                  <img
                    src={article.image}
                    className="card-img-top"
                    alt="..."
                    style={{ maxWidth: 180, margin: "auto" }}
                  />
                </div>
              </div>
              <div className="col-md-7 py-3">
                <div className="">
                  <h5 className="card-title mb-2">{article.title}</h5>
                  <small className="card-text">{article.created_at}</small>
                </div>
                <ul className="list-unstyled mt-2 mb-0">
                  <li className="d-inline-block mr-3">
                    <small>
                      Take away
                      <i
                        className={`far fa-check-circle align-middle ml-1 takeaway ${
                          article.takeaway == true ? "active" : null
                        }`}
                      ></i>
                    </small>
                  </li>
                  <li className="d-inline-block">
                    <small>
                      Delivery
                      <i
                        className={`far fa-check-circle align-middle ml-1 delivery ${
                          article.delivery == true ? "active" : null
                        }`}
                      ></i>
                    </small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))} */}
    </div>
  );
};

export default LatestArticle;
