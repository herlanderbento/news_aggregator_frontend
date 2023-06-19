import { useState } from "react";
import { Button } from "../../components/common/button";
import { Card } from "../../components/common/card";
import { CustomFiltersModal } from "../../components/common/custom-filters-modal";
import { Filters } from "../../components/filters";

import "./home.scss";

export function Home() {
  const [isOpenCustomFiltersModal, setIsOpenCustomFiltersModal] =
    useState(false);
  const toggleCustomFiltersModal = () =>
    setIsOpenCustomFiltersModal(!isOpenCustomFiltersModal);

  return (
    <>
      <main className="main">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="hero-title">
                <h1>
                  Articles <span className="result">(100 result)</span>
                </h1>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="hero-filter">
                <Button variant="secondary-with-border">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
                    />
                  </svg>
                  <span> Show filters</span>
                </Button>
                <Button variant="primary" onClick={toggleCustomFiltersModal}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </Button>
              </div>
            </div>

            <div className="col-lg-12">
              <Filters />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6 card-items">
              <Card
                urlImg="https://images.unsplash.com/photo-1686903431112-9b426ee61dad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                url="/news-details"
                title="The Ultimate Guide to Bali: What 
              to See, Do, and Eat"
                author="Herlander Bento"
                description="Malesuada egestas nunc vestibulum egestas 
              mauris augue tempor scelerisque eros."
                date="12/04/2023 13:40"
              />
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 card-items">
              <Card
                urlImg="https://images.unsplash.com/photo-1686859161298-0d0159e9c71a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1056&q=80"
                url="/news-details"
                title="The Ultimate Guide to Bali: What 
              to See, Do, and Eat"
                author="Antonio Gabriel"
                description="Malesuada egestas nunc vestibulum egestas 
              mauris augue tempor scelerisque eros."
                date="12/04/2023 13:40"
              />
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 card-items">
              <Card
                urlImg="https://images.unsplash.com/photo-1686956222311-2e1bb5bb1b0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                url="/news-details"
                title="The Ultimate Guide to Bali: What 
              to See, Do, and Eat"
                isContent
                author="Antonio Gabriel"
                description="Malesuada egestas nunc vestibulum egestas 
              mauris augue tempor scelerisque eros."
                date="12/04/2023 13:40"
              />
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 card-items">
              <Card
                urlImg="https://images.unsplash.com/photo-1566837945700-30057527ade0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                url="/news-details"
                title="The Ultimate Guide to Bali: What 
              to See, Do, and Eat"
                author="Herlander Bento"
                description="Malesuada egestas nunc vestibulum egestas 
              mauris augue tempor scelerisque eros."
                date="12/04/2023 13:40"
              />
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 card-items">
              <Card
                urlImg="https://images.unsplash.com/photo-1686940975039-d2dff3322a85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                url="/news-details"
                title="The Ultimate Guide to Bali: What 
              to See, Do, and Eat"
                isContent
                author="Marcia Gaieta"
                description="Malesuada egestas nunc vestibulum egestas 
              mauris augue tempor scelerisque eros."
                date="12/04/2023 13:40"
              />
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 card-items">
              <Card
                urlImg="https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                url="/news-details"
                title="The Ultimate Guide to Bali: What 
              to See, Do, and Eat"
                isContent
                author="Antonio Gabriel"
                description="Malesuada egestas nunc vestibulum egestas 
              mauris augue tempor scelerisque eros."
                date="12/04/2023 13:40"
              />
            </div>
          </div>

          <div className="row justify-content-center align-items-center">
            <div className="col-lg-4">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                      />
                    </svg>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <CustomFiltersModal
        isOpenCustomFiltersModal={isOpenCustomFiltersModal}
        toggleCustomFiltersModal={toggleCustomFiltersModal}
      />
    </>
  );
}
