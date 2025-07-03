import { useState } from "react";
import "./Search.css";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";

const Search = ({ setSearch }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    console.log("Input value:", value);
    setQuery(value);
  };

  const { data } = useFetch(
    `/api/products?populate=*&[filters][title][$containsi]=${query}`
  );
  const results = query.length ? data?.data : null;

  return (
    <div
      className="modal fade"
      id="examplemodal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-fullscreen">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => setSearch(false)}
            ></button>
          </div>

          <div className="modal-body">
            <div className="container">
              <div className="row pb-4 justify-content-center">
                <div className="col-md-8">
                  <div className="search-input">
                    <input
                      type="search"
                      className="form-control"
                      placeholder="SEARCH PRODUCTS ..."
                      value={query}
                      onChange={handleChange}
                      autoFocus
                    />
                  </div>
                </div>
              </div>

              {results?.length > 0 && (
                <div className="row">
                  {results.map((item) => (
                    <div
                      key={item.id}
                      className="col-6col-md-6 col-lg-4 mb-3 search-result-card"
                      onClick={() => {
                        navigate("/product/" + item.id);
                        setSearch(false);
                        const modalEl = document.getElementById("examplemodal");
                        if (modalEl) {
                          const modal =
                            window.bootstrap.Modal.getInstance(modalEl);
                          modal?.hide();
                        }
                      }}
                    >
                      <div className="card p-3 h-100">
                        <div className="d-flex align-items-center flex-column flex-md-row w-100">
                          <img
                            src={"http://localhost:1337" + item?.img?.url}
                            alt={item.title}
                            className="img-fluid-3"
                          />
                          <div>
                            <h5 className="mb-1">{item.title}</h5>
                            <p className="product-description mb-0 text-muted px-2">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {query.length > 0 && data?.data?.length === 0 && (
                <p className="text-muted mt-4 text-center">
                  No products found.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
