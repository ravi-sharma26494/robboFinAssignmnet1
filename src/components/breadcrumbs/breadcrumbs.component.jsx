import React from "react";

const Breadcrumbs = ({ text }) => {
  return (
    <nav class="flex" aria-label="Breadcrumb">
      <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li aria-current="page">
          <div class="flex items-center">
            <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
              jMarket
            </span>
          </div>
        </li>
        <li aria-current="page">
          <div class="flex items-center">
            <svg
              width="10"
              height="16"
              viewBox="0 0 10 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.01875 15.5L0.6875 14.1688L6.85625 8L0.6875 1.83125L2.01875 0.5L9.51875 8L2.01875 15.5Z"
                fill="#7C7C7C"
              />
            </svg>

            <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
              Category 1
            </span>
          </div>
        </li>
        <li aria-current="page">
          <div class="flex items-center">
            <svg
              width="10"
              height="16"
              viewBox="0 0 10 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.01875 15.5L0.6875 14.1688L6.85625 8L0.6875 1.83125L2.01875 0.5L9.51875 8L2.01875 15.5Z"
                fill="#7C7C7C"
              />
            </svg>

            <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
              Theme park site
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
