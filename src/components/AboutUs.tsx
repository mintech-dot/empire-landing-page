import aboutus from "../assets/aboutus.png";
const AboutUs = () => {
  return (
    <article className="flex">
      <div className="flex-1 pl-16 pt-32">
        <img src={aboutus} alt="" className="h-[723px]" />
      </div>

      <div className="flex-1 pt-[116px] pr-32">
        <h1 className="flex text-orange font-poppins font-bold text-[18px] pb-6 ">
          {" "}
          <svg
            className="mt-5 mr-1"
            width="39"
            height="2"
            viewBox="0 0 39 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="39" height="2" rx="1" fill="#EF7B3E" />
          </svg>
          About us
        </h1>

        <h1 className="text-[40px] text-metal font-poppins font-bold uppercase">
          what we do
        </h1>

        <p className="text-[15px] font-lato font-medium font-light-silver pt-2 leading-6 pb-16">
          Empire FBA Prep Services In USA &Canada specializes in providing world{" "}
          <br></br>
          class prep solutions for your Amazon FBA business.{" "}
        </p>
        <div className="flex gap-[17px] pr-44  ">
          <svg
            className="mt-2.5"
            width="185"
            height="82"
            viewBox="0 0 82 82"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="41" cy="41" r="41" fill="#F3F3F3" />
            <path
              d="M34.6369 21.9984C34.6343 26.5648 34.6307 31.1312 34.6289 35.6984C34.6289 35.7534 34.644 35.8093 34.6564 35.8909C39.7527 36.9107 44.8453 37.9288 50.0116 38.9629C51.0795 34.22 52.1429 29.4958 53.2196 24.7175C53.9407 24.8558 54.6369 24.9853 55.3314 25.1237C57.1513 25.4864 58.9713 25.8526 60.7912 26.2163C61.922 26.4424 62.6671 27.0845 62.9429 28.2214C63.1637 29.1322 62.7522 30.168 61.9487 30.7498C61.2489 31.2571 60.464 31.2961 59.6524 31.1409C58.7265 30.9644 57.8041 30.772 56.8799 30.5875C56.7558 30.5627 56.6307 30.5449 56.4728 30.5175C56.2103 31.6508 55.9487 32.7745 55.6906 33.899C55.5123 34.6777 55.326 35.4563 55.1726 36.2403C55.1354 36.4292 55.162 36.6651 55.2462 36.8371C55.8715 38.1204 56.5314 39.3877 57.1487 40.6754C57.2604 40.9086 57.3056 41.2279 57.2498 41.478C56.1349 46.4647 54.9997 51.447 53.8795 56.432C53.8369 56.6209 53.8635 56.8568 53.9407 57.0359C55.5558 60.7935 53.3518 65.0477 49.3535 65.8725C45.8041 66.605 42.244 64.0961 41.7793 60.523C41.7473 60.2774 41.6533 60.1816 41.4192 60.139C35.8156 59.1094 30.213 58.0709 24.6094 57.0404C23.452 56.8275 22.7363 56.1943 22.5757 55.1372C22.5278 54.8215 22.5784 54.4818 22.6369 54.1625C22.7203 53.7147 22.8418 53.2722 22.9677 52.8341C23.1957 52.0394 23.6915 51.479 24.4844 51.2147C24.7114 51.1393 24.8187 51.0391 24.8728 50.7863C25.4786 47.9529 26.1039 45.1238 26.7221 42.2921C26.7487 42.1688 26.7584 42.042 26.7859 41.8434C24.1704 41.8434 21.585 41.8434 18.9988 41.8434C18.9988 36.7742 18.9988 31.7049 18.9988 26.6366C20.5456 25.0917 22.0923 23.5451 23.6382 21.9984C27.3048 21.9984 30.9704 21.9984 34.6369 21.9984ZM34.6298 41.8638C34.4054 41.8638 34.2493 41.8638 34.0932 41.8638C32.2892 41.8638 30.4853 41.8726 28.6821 41.8558C28.354 41.8522 28.2467 41.9658 28.1819 42.2717C27.6143 44.9527 27.0307 47.63 26.4498 50.3083C26.2511 51.2235 26.2467 51.2324 27.1513 51.4142C32.6378 52.5183 38.1243 53.6198 43.6134 54.7071C43.7908 54.7425 44.0391 54.6618 44.1908 54.5492C44.8773 54.0419 45.6134 53.6455 46.4453 53.4451C46.6999 53.3839 46.8019 53.2535 46.8604 52.9893C47.6409 49.4782 48.44 45.9716 49.232 42.4624C49.3881 41.7724 49.5336 41.0807 49.6897 40.3614C48.0906 40.0422 46.5429 39.7327 44.9766 39.4196C44.5207 41.0044 44.0773 42.5475 43.6258 44.1155C40.7699 43.5435 37.9637 42.9812 35.1283 42.4127C35.5797 40.8253 36.0152 39.2946 36.4613 37.7222C35.8405 37.5963 35.2586 37.4783 34.6289 37.3497C34.6298 38.8627 34.6298 40.3313 34.6298 41.8638ZM20.4711 27.6671C20.4711 31.9506 20.4711 36.1773 20.4711 40.4138C24.7194 40.4138 28.934 40.4138 33.1584 40.4138C33.1584 34.7513 33.1584 29.118 33.1584 23.4679C30.3274 23.4679 27.5176 23.4679 24.6644 23.4679C24.6644 24.8771 24.6644 26.2579 24.6644 27.6671C23.2515 27.6671 21.8813 27.6671 20.4711 27.6671ZM42.6866 56.0063C42.6218 55.9903 42.487 55.954 42.3513 55.9265C38.8374 55.2197 35.3243 54.512 31.8103 53.8096C29.7101 53.3901 27.6099 52.9706 25.5061 52.5671C24.8666 52.4447 24.4923 52.7046 24.3247 53.3263C24.2139 53.7395 24.1092 54.1546 24.0116 54.5723C23.8972 55.0645 24.1367 55.4565 24.6263 55.5806C24.8054 55.6258 24.9908 55.6489 25.1735 55.6826C29.1194 56.4134 33.0653 57.1441 37.0112 57.8749C38.581 58.1658 40.1509 58.4549 41.6507 58.7316C42.0037 57.8039 42.3407 56.9171 42.6866 56.0063ZM48.0897 64.5457C50.8329 64.5457 53.0307 62.3579 53.0369 59.622C53.0422 56.8665 50.832 54.6414 48.0906 54.6432C45.3518 54.645 43.1336 56.8745 43.1371 59.622C43.1407 62.3464 45.3535 64.5457 48.0897 64.5457ZM49.7606 53.4158C51.5283 45.6834 53.2923 37.9696 55.0635 30.2239C54.5039 30.1166 54.0232 30.0253 53.5167 29.9286C51.766 37.7098 50.0276 45.4351 48.2821 53.1932C48.7806 53.2677 49.2418 53.3369 49.7606 53.4158ZM53.8405 28.5043C54.1065 28.562 54.3265 28.6134 54.5473 28.6577C56.4214 29.0311 58.2954 29.4107 60.1722 29.7734C60.8143 29.8976 61.4218 29.5135 61.5318 28.9548C61.6533 28.342 61.3074 27.8028 60.6396 27.6636C58.5482 27.2281 56.4515 26.8149 54.3141 26.3848C54.1544 27.0996 54.001 27.7877 53.8405 28.5043ZM53.5221 43.3998C53.1274 45.1336 52.7442 46.8177 52.3575 48.5178C52.9864 48.6384 53.5398 48.7448 54.1172 48.8557C54.5074 47.1361 54.8879 45.4608 55.2764 43.7536C54.6883 43.6348 54.1349 43.5231 53.5221 43.3998ZM52.6963 55.1097C53.0653 53.4885 53.4272 51.8958 53.797 50.2693C53.1966 50.1478 52.6289 50.0334 52.0374 49.9146C51.734 51.2271 51.436 52.5033 51.1522 53.7821C51.1336 53.8655 51.1957 54.0074 51.2666 54.0623C51.7189 54.4073 52.1828 54.7363 52.6963 55.1097ZM40.4799 42.0199C41.2037 42.1662 41.8946 42.3054 42.6165 42.4509C42.9331 41.3361 43.2418 40.2497 43.5566 39.1403C42.903 39.0055 42.3034 38.8866 41.7074 38.7554C41.4617 38.7013 41.3881 38.821 41.3296 39.0312C41.0617 40.0058 40.7788 40.976 40.4799 42.0199ZM39.0697 41.7378C39.3926 40.6044 39.6977 39.5314 40.0125 38.4237C39.2648 38.2782 38.5766 38.1452 37.8742 38.0086C37.5513 39.1447 37.2471 40.216 36.9358 41.3113C37.6702 41.4585 38.3504 41.5951 39.0697 41.7378ZM54.589 38.7509C54.3283 39.8905 54.0915 40.9246 53.8467 41.9968C54.4498 42.1174 55.013 42.2291 55.6365 42.3542C55.6923 41.917 55.8848 41.4753 55.7633 41.1507C55.4662 40.3552 55.0236 39.6138 54.589 38.7509ZM23.2178 24.6838C22.707 25.1902 22.1695 25.7232 21.6764 26.2118C22.1243 26.2118 22.66 26.2118 23.2178 26.2118C23.2178 25.6487 23.2178 25.1148 23.2178 24.6838Z"
              fill="#EF7B3E"
            />
            <path
              d="M21.8626 29.8213C23.0316 29.8213 24.1722 29.8213 25.3509 29.8213C25.3509 30.2754 25.3509 30.7214 25.3509 31.2261C24.6671 31.2261 23.9895 31.2261 23.295 31.2261C23.295 33.3704 23.295 35.4554 23.295 37.5714C25.1629 37.5714 27.0138 37.5714 28.9154 37.5714C28.9154 36.6438 28.9154 35.7339 28.9154 34.7938C29.4014 34.7938 29.8387 34.7938 30.3123 34.7938C30.3123 36.1791 30.3123 37.5706 30.3123 38.9939C27.507 38.9939 24.6981 38.9939 21.8617 38.9939C21.8626 35.9503 21.8626 32.9102 21.8626 29.8213Z"
              fill="#EF7B3E"
            />
            <path
              d="M26.0799 35.7055C25.4689 35.0918 24.8551 34.4763 24.2139 33.8316C24.542 33.5558 24.887 33.2649 25.2932 32.9226C25.4733 33.1531 25.7269 33.4786 25.9717 33.7926C27.5354 32.2255 29.0059 30.7516 30.4906 29.2634C30.8693 29.6572 31.1895 29.9898 31.4866 30.2984C29.6941 32.0916 27.8875 33.8981 26.0799 35.7055Z"
              fill="#EF7B3E"
            />
            <path
              d="M48.1074 63.149C46.1677 63.1579 44.5535 61.5633 44.5314 59.6176C44.5101 57.7091 46.1278 56.0365 48.0719 56.0516C50.0817 56.0666 51.5975 57.5876 51.6383 59.583C51.6773 61.5172 50.0498 63.1401 48.1074 63.149ZM48.0666 61.7061C49.2427 61.7141 50.1837 60.805 50.1979 59.6468C50.2121 58.4602 49.2861 57.4962 48.1145 57.4803C46.9544 57.4643 45.9762 58.4327 45.9744 59.5989C45.9726 60.7554 46.9083 61.6981 48.0666 61.7061Z"
              fill="#EF7B3E"
            />
          </svg>

          <div>
            <h1 className="font-poppins font-bold text-[20px] pb-1 ">
              RECEIVE YOUR INVENTORY
            </h1>
            <p className="font-lato font-light-silver font-medium text-[15px]">
              Send your products, packaging and inserts directly to one of our
              three locations strategically located in California, New York or
              Toronto Canada
            </p>
          </div>
        </div>
        <div className="border-[1.5px] border-[#ECECEC] w-[557px] mt-[16px] mb-[23px]"></div>

        <div className="flex gap-[17px] pr-44  ">
          <svg
            className="mt-2.5"
            width="210"
            height="82"
            viewBox="0 0 82 82"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="41" cy="41" r="41" fill="#F3F3F3" />
            <g clip-path="url(#clip0_0_1)">
              <path
                d="M55.3988 32.5746C54.9848 32.5746 54.6238 32.5746 54.2207 32.5746C54.2207 30.5924 54.2207 28.6123 54.2207 26.6071C52.8007 26.6071 51.4216 26.6071 49.9985 26.6071C49.9985 26.7432 49.9985 26.8763 49.9985 27.0093C49.9985 28.4102 49.9995 29.811 49.9985 31.2108C49.9985 31.7871 49.8075 31.9822 49.2455 31.9832C47.7454 31.9842 46.2453 31.9842 44.7462 31.9832C44.2002 31.9822 44.0032 31.7851 44.0022 31.2398C44.0002 29.7039 44.0012 28.167 44.0012 26.6061C42.5991 26.6061 41.22 26.6061 39.8189 26.6061C39.8189 31.3849 39.8189 36.1577 39.8189 40.9715C40.587 40.9715 41.367 40.9715 42.1721 40.9715C42.1721 41.3917 42.1721 41.7699 42.1721 42.1782C41.396 42.1782 40.625 42.1782 39.8269 42.1782C39.8269 46.988 39.8269 51.7688 39.8269 56.5926C40.6 56.5926 41.379 56.5926 42.1781 56.5926C42.1781 57.0038 42.1781 57.374 42.1781 57.7993C42.0501 57.7993 41.9181 57.7993 41.787 57.7993C35.7997 57.7993 29.8134 57.7993 23.826 57.7993C23.174 57.7993 23 57.6292 23 56.9868C23 46.7188 23 36.4518 23 26.1849C23 25.5595 23.176 25.3824 23.797 25.3824C34.0586 25.3824 44.3202 25.3824 54.5818 25.3824C55.2278 25.3824 55.3978 25.5545 55.3978 26.2039C55.3978 28.192 55.3978 30.1802 55.3978 32.1693C55.3988 32.2924 55.3988 32.4155 55.3988 32.5746ZM28.4003 26.6101C26.9702 26.6101 25.5911 26.6101 24.2161 26.6101C24.2161 31.4119 24.2161 36.1837 24.2161 40.9695C29.0143 40.9695 33.7926 40.9695 38.5749 40.9695C38.5749 36.1657 38.5749 31.3849 38.5749 26.6101C37.1708 26.6101 35.7917 26.6101 34.3976 26.6101C34.3976 28.164 34.3986 29.6889 34.3976 31.2138C34.3976 31.7891 34.2066 31.9832 33.6426 31.9842C32.1925 31.9852 30.7434 31.9852 29.2933 31.9842C28.5443 31.9842 28.4013 31.8402 28.4013 31.0887C28.4003 29.6018 28.4003 28.116 28.4003 26.6101ZM38.5689 56.5926C38.5689 51.7988 38.5689 47.01 38.5689 42.2152C37.1778 42.2152 35.7987 42.2152 34.3976 42.2152C34.3976 43.7771 34.3986 45.314 34.3966 46.8499C34.3956 47.3932 34.1966 47.5913 33.6516 47.5923C32.1515 47.5933 30.6524 47.5933 29.1523 47.5923C28.5903 47.5913 28.4003 47.3962 28.4003 46.8189C28.3993 45.4181 28.4003 44.0183 28.4003 42.6174C28.4003 42.4844 28.4003 42.3513 28.4003 42.2152C26.9772 42.2152 25.5981 42.2152 24.2261 42.2152C24.2261 47.022 24.2261 51.8038 24.2261 56.5926C29.0163 56.5926 33.7766 56.5926 38.5689 56.5926ZM29.6244 26.5971C29.6244 28.0069 29.6244 29.3867 29.6244 30.7555C30.8304 30.7555 32.0085 30.7555 33.1806 30.7555C33.1806 29.3547 33.1806 27.9839 33.1806 26.5971C31.9905 26.5971 30.8204 26.5971 29.6244 26.5971ZM48.7744 30.7685C48.7744 29.3587 48.7744 27.9789 48.7744 26.6101C47.5684 26.6101 46.3903 26.6101 45.2182 26.6101C45.2182 28.0109 45.2182 29.3817 45.2182 30.7685C46.4083 30.7685 47.5784 30.7685 48.7744 30.7685ZM33.1726 46.3796C33.1726 44.9668 33.1726 43.587 33.1726 42.2082C31.9745 42.2082 30.8054 42.2082 29.6184 42.2082C29.6184 43.606 29.6184 44.9848 29.6184 46.3796C30.8094 46.3796 31.9795 46.3796 33.1726 46.3796Z"
                fill="#EF7B3E"
              />
              <path
                d="M43.4011 46.3936C43.4011 43.0307 43.4001 39.6667 43.4011 36.3038C43.4021 34.8009 44.4122 33.7883 45.9123 33.7883C49.4365 33.7873 52.9607 33.7873 56.4849 33.7883C57.9859 33.7883 58.998 34.7999 58.998 36.3018C58.999 43.0287 58.999 49.7556 58.998 56.4825C58.998 57.9834 57.9849 58.999 56.4859 58.999C52.9617 59 49.4375 59 45.9133 58.999C44.4142 58.998 43.4011 57.9834 43.4001 56.4845C43.4001 53.1206 43.4011 49.7576 43.4011 46.3936ZM57.8019 46.4026C57.8019 43.0887 57.8019 39.7738 57.8019 36.4598C57.8019 35.4433 57.3509 34.986 56.3469 34.986C52.9217 34.986 49.4965 34.986 46.0723 34.986C45.0592 34.986 44.5992 35.4403 44.5992 36.4418C44.5992 43.0707 44.5992 49.6986 44.5992 56.3274C44.5992 57.358 45.0492 57.8013 46.0913 57.8013C49.4915 57.8013 52.8917 57.8013 56.2908 57.8013C57.3599 57.8013 57.8019 57.365 57.8019 56.3074C57.8019 53.0055 57.8019 49.7036 57.8019 46.4026Z"
                fill="#EF7B3E"
              />
              <path
                d="M28.4163 24.1517C28.4163 23.7615 28.4163 23.3922 28.4163 23.002C34.4076 23.002 40.384 23.002 46.3793 23.002C46.3793 23.3842 46.3793 23.7545 46.3793 24.1517C40.404 24.1517 34.4286 24.1517 28.4163 24.1517Z"
                fill="#EF7B3E"
              />
              <path
                d="M47.6234 23C48.0044 23 48.3724 23 48.7694 23C48.7694 23.3732 48.7694 23.7504 48.7694 24.1537C48.3994 24.1537 48.0224 24.1537 47.6234 24.1537C47.6234 23.7735 47.6234 23.3962 47.6234 23Z"
                fill="#EF7B3E"
              />
              <path
                d="M34.9677 39.7748C34.5826 39.7748 34.2146 39.7748 33.8236 39.7748C33.8236 39.3846 33.8236 39.0073 33.8236 38.6101C34.2006 38.6101 34.5696 38.6101 34.9677 38.6101C34.9677 38.9793 34.9677 39.3565 34.9677 39.7748Z"
                fill="#EF7B3E"
              />
              <path
                d="M36.2177 39.7618C36.2177 39.3656 36.2177 38.9964 36.2177 38.6091C36.6028 38.6091 36.9708 38.6091 37.3688 38.6091C37.3688 38.9803 37.3688 39.3576 37.3688 39.7618C37.0008 39.7618 36.6238 39.7618 36.2177 39.7618Z"
                fill="#EF7B3E"
              />
              <path
                d="M34.9747 55.3909C34.5786 55.3909 34.2196 55.3909 33.8306 55.3909C33.8306 55.0087 33.8306 54.6304 33.8306 54.2262C34.1976 54.2262 34.5746 54.2262 34.9747 54.2262C34.9747 54.6034 34.9747 54.9806 34.9747 55.3909Z"
                fill="#EF7B3E"
              />
              <path
                d="M36.2187 55.3719C36.2187 54.9726 36.2187 54.6044 36.2187 54.2182C36.6048 54.2182 36.9728 54.2182 37.3698 54.2182C37.3698 54.5924 37.3698 54.9696 37.3698 55.3719C36.9988 55.3719 36.6218 55.3719 36.2187 55.3719Z"
                fill="#EF7B3E"
              />
              <path
                d="M54.2267 44.0133C54.6278 44.0133 54.9988 44.0133 55.3668 44.0133C55.5378 45.6342 54.2207 47.4363 52.4706 48.0006C50.6035 48.602 48.5474 47.8055 47.5604 46.0975C46.5703 44.3835 46.9183 42.1762 48.3854 40.8634C49.7505 39.6417 51.9606 39.4176 53.2907 40.3792C53.0997 40.7084 52.9087 41.0395 52.7206 41.3647C50.5485 40.6183 48.8584 41.3287 48.3264 43.1838C47.8604 44.8108 48.8744 46.5248 50.5185 46.91C51.9546 47.2472 53.9887 46.4607 54.2267 44.0133Z"
                fill="#EF7B3E"
              />
              <path
                d="M55.9818 52.4242C55.9818 52.8174 55.9818 53.1876 55.9818 53.5769C52.7887 53.5769 49.6135 53.5769 46.4193 53.5769C46.4193 53.1906 46.4193 52.8204 46.4193 52.4242C49.5975 52.4242 52.7737 52.4242 55.9818 52.4242Z"
                fill="#EF7B3E"
              />
              <path
                d="M55.5338 39.9219C55.8658 40.2571 56.1288 40.5222 56.4159 40.8124C56.3339 40.9014 56.2558 40.9925 56.1718 41.0775C54.7158 42.5364 53.2587 43.9942 51.8016 45.4521C51.3266 45.9274 51.0816 45.9254 50.6075 45.4571C50.1635 45.0188 49.7155 44.5846 49.2615 44.1403C49.5725 43.8552 49.8545 43.596 50.1695 43.3068C50.4505 43.628 50.7755 43.9983 51.0986 44.3675C52.6206 42.8406 54.0637 41.3947 55.5338 39.9219Z"
                fill="#EF7B3E"
              />
              <path
                d="M48.8174 51.1675C48.8174 50.7762 48.8174 50.407 48.8174 50.0168C51.2096 50.0168 53.5847 50.0168 55.9798 50.0168C55.9798 50.401 55.9798 50.7702 55.9798 51.1675C53.6047 51.1675 51.2286 51.1675 48.8174 51.1675Z"
                fill="#EF7B3E"
              />
              <path
                d="M50.5915 36.2127C50.5915 36.6059 50.5915 36.9651 50.5915 37.3554C50.2115 37.3554 49.8345 37.3554 49.4295 37.3554C49.4295 36.9912 49.4295 36.6139 49.4295 36.2127C49.8035 36.2127 50.1795 36.2127 50.5915 36.2127Z"
                fill="#EF7B3E"
              />
              <path
                d="M51.8196 37.3614C51.8196 36.9621 51.8196 36.5939 51.8196 36.2077C52.2056 36.2077 52.5736 36.2077 52.9707 36.2077C52.9707 36.5809 52.9707 36.9591 52.9707 37.3614C52.5996 37.3614 52.2226 37.3614 51.8196 37.3614Z"
                fill="#EF7B3E"
              />
              <path
                d="M47.5914 50.0208C47.5914 50.414 47.5914 50.7732 47.5914 51.1634C47.2113 51.1634 46.8343 51.1634 46.4293 51.1634C46.4293 50.7992 46.4293 50.422 46.4293 50.0208C46.8033 50.0208 47.1793 50.0208 47.5914 50.0208Z"
                fill="#EF7B3E"
              />
              <path
                d="M50.6185 56.5786C50.6185 56.1904 50.6185 55.8222 50.6185 55.4269C50.9986 55.4269 51.3756 55.4269 51.7766 55.4269C51.7766 55.8042 51.7766 56.1814 51.7766 56.5786C51.3976 56.5786 51.0296 56.5786 50.6185 56.5786Z"
                fill="#EF7B3E"
              />
            </g>
            <defs>
              <clipPath id="clip0_0_1">
                <rect
                  width="36"
                  height="36"
                  fill="white"
                  transform="translate(23 23)"
                />
              </clipPath>
            </defs>
          </svg>

          <div>
            <h1 className="font-poppins font-bold text-[20px] pb-1 ">
              PREP AND LABEL
            </h1>
            <p className="font-lato font-light-silver font-medium text-[15px]">
              Our team will inspect all items before carefully wrapping, adding
              inserts, packing and attaching all the necessary labels required
              for delivery and receipt by Amazon
            </p>
          </div>
        </div>

        <div className="border-[1.5px] border-[#ECECEC] w-[557px] mt-[20px] mb-[22px]"></div>
        <div className="flex gap-[17px] pr-44 ">
          <svg
            width="185"
            height="82"
            viewBox="0 0 82 82"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="41" cy="41" r="41" fill="#F3F3F3" />
            <path
              d="M62.3191 49.5049C62.0568 49.8342 61.7184 49.9349 61.3051 49.9159C60.7176 49.889 60.128 49.9092 59.5471 49.9092C59.0644 52.7903 57.4762 54.3042 55.0426 54.1956C53.2923 54.1172 51.2335 52.7534 51.0682 49.9417C46.1205 49.9417 41.1718 49.9417 36.2241 49.9417C35.5948 52.9269 34.0573 54.3714 31.6369 54.1911C29.6409 54.0422 27.8466 52.4253 27.7529 49.9081C27.6118 49.9081 27.4663 49.9081 27.3219 49.9081C26.33 49.9081 25.338 49.9114 24.3461 49.9069C23.375 49.9025 22.8163 49.3269 22.8129 48.3348C22.8118 47.9182 22.8129 47.5017 22.8129 47.0314C22.2001 47.0314 21.627 47.0336 21.0528 47.0303C20.8742 47.0292 20.6913 47.0325 20.5193 46.9967C20.2008 46.9295 20.0178 46.7156 20.0013 46.3808C19.9837 46.046 20.1446 45.8165 20.4554 45.7134C20.5833 45.6709 20.7243 45.6597 20.8599 45.6586C22.8438 45.6552 24.8266 45.6563 26.8105 45.6563C26.8788 45.6563 26.9483 45.653 27.0166 45.6597C27.4123 45.7011 27.6724 45.9654 27.6801 46.3293C27.6889 46.7156 27.4299 47.009 27.0056 47.0213C26.2352 47.0426 25.4626 47.0303 24.6921 47.0314C24.529 47.0314 24.367 47.0314 24.1774 47.0314C24.1774 47.5442 24.1774 48.0112 24.1774 48.4949C24.2932 48.5095 24.3857 48.5296 24.4794 48.5296C25.554 48.5319 26.6287 48.5408 27.7022 48.5196C27.8366 48.5173 28.0339 48.3897 28.0912 48.2665C28.8727 46.607 30.1644 45.6787 31.9643 45.6754C33.7652 45.6731 35.0713 46.5958 35.8263 48.2654C35.9541 48.5476 36.1338 48.5308 36.352 48.5308C40.6494 48.5308 44.9478 48.5308 49.2452 48.5308C49.3686 48.5308 49.491 48.5308 49.6761 48.5308C49.6761 48.3572 49.6761 48.2094 49.6761 48.0616C49.6761 46.5645 49.6783 45.0662 49.675 43.5691C49.6739 43.2444 49.7731 42.951 50.0861 42.8715C50.2955 42.8177 50.6074 42.8457 50.7584 42.9756C50.9139 43.11 50.9943 43.4101 50.9976 43.6396C51.0175 45.1233 51.0042 46.6059 51.0142 48.0896C51.0153 48.2329 51.099 48.3751 51.1442 48.5173C51.2489 48.4109 51.39 48.3225 51.4517 48.1948C52.2365 46.5768 53.5194 45.6765 55.284 45.672C57.0485 45.6675 58.348 46.5544 59.1129 48.1836C59.2429 48.4613 59.3895 48.5476 59.6717 48.5341C60.0949 48.514 60.5204 48.5285 60.97 48.5285C60.97 47.5431 60.97 46.5969 60.97 45.6115C60.6603 45.5959 60.3473 45.5925 60.0376 45.5634C59.0093 45.4649 58.2301 44.6485 58.1783 43.6016C58.154 43.0988 58.1584 42.5938 58.1705 42.091C58.1827 41.5927 58.4251 41.3632 58.9266 41.3576C59.5549 41.352 60.1842 41.3565 60.8213 41.3565C60.6449 40.539 59.8502 39.8582 58.9696 39.8504C56.3663 39.8269 53.763 39.8425 51.1596 39.8437C51.1222 39.8437 51.0847 39.8672 51.0009 39.894C51.0009 40.1348 51.0142 40.3845 50.9976 40.632C50.9734 41.0116 50.7155 41.259 50.3628 41.2669C49.9946 41.2758 49.7158 41.0194 49.6805 40.6286C49.6695 40.5032 49.6761 40.3767 49.6761 40.2512C49.6761 36.4586 49.6761 32.666 49.6761 28.8734C49.6761 28.7099 49.6761 28.5453 49.6761 28.3616C41.1619 28.3616 32.695 28.3616 24.1752 28.3616C24.1664 28.5352 24.1499 28.7099 24.1499 28.8846C24.1488 32.6772 24.1488 36.4698 24.1488 40.2624C24.1488 40.9713 23.9581 41.2613 23.4941 41.2669C23.0168 41.2736 22.8118 40.9668 22.8118 40.2423C22.8118 36.3657 22.8118 32.4891 22.8118 28.6125C22.8129 27.5341 23.3409 27 24.4111 27C32.7446 27 41.0792 27 49.4127 27C50.495 27 51.0031 27.514 51.0075 28.6136C51.0086 29.0156 51.0075 29.4176 51.0075 29.861C51.3283 29.861 51.6005 29.861 51.8727 29.861C53.2086 29.861 54.5455 29.8565 55.8813 29.8621C57.5643 29.8688 58.7393 31.039 58.7844 32.7433C58.7878 32.8687 58.7778 32.9952 58.7878 33.1206C58.8208 33.5573 58.7326 33.9291 58.2774 34.1049C58.618 35.4945 58.9465 36.8629 59.2948 38.2267C59.3289 38.3589 59.4612 38.5335 59.5791 38.5649C61.0207 38.949 61.9091 39.8694 62.253 41.3397C62.2618 41.3766 62.2971 41.408 62.3202 41.4416C62.3191 44.1301 62.3191 46.8175 62.3191 49.5049ZM57.9358 38.4686C57.927 38.3745 57.9292 38.3051 57.9126 38.239C57.6073 36.995 57.2888 35.7543 57 34.5069C56.9306 34.2079 56.8204 34.1038 56.5096 34.1071C54.8034 34.1228 53.0973 34.1138 51.3911 34.1161C51.2732 34.1161 51.1552 34.1362 51.045 34.1463C51.045 35.6121 51.045 37.042 51.045 38.4686C53.3607 38.4686 55.6389 38.4686 57.9358 38.4686ZM34.8189 49.9349C34.8189 48.3158 33.5591 47.0392 31.9621 47.0415C30.3815 47.0437 29.0931 48.3494 29.0964 49.9428C29.0997 51.5284 30.4113 52.8564 31.9698 52.8542C33.5404 52.8519 34.8189 51.5418 34.8189 49.9349ZM55.3049 47.0415C53.7156 47.0359 52.4426 48.3146 52.4326 49.9282C52.4227 51.5172 53.7178 52.8463 55.2851 52.8542C56.8468 52.862 58.1485 51.5474 58.1606 49.9495C58.1716 48.3538 56.8876 47.0471 55.3049 47.0415ZM57.4244 32.7063C57.4277 31.8262 56.8248 31.2405 55.9056 31.2349C54.3945 31.2249 52.8823 31.2316 51.3713 31.2338C51.2643 31.2338 51.1574 31.2529 51.0329 31.2652C51.0329 31.7523 51.0329 32.2181 51.0329 32.7074C53.1689 32.7063 55.2795 32.7063 57.4244 32.7063ZM60.9678 44.176C60.9678 43.7012 60.9678 43.2242 60.9678 42.7114C60.711 42.7114 60.4818 42.7114 60.2514 42.7114C60.0101 42.7114 59.7698 42.7114 59.5361 42.7114C59.395 44.0405 59.7389 44.3798 60.9678 44.176Z"
              fill="#EF7B3E"
            />
            <path
              d="M36.1559 39.7048C38.1178 37.7071 39.9848 35.808 41.8508 33.9078C42.3391 33.4117 42.7248 33.3345 43.0456 33.6681C43.3531 33.9884 43.2759 34.3826 42.8119 34.854C40.8368 36.8617 38.8617 38.8683 36.8855 40.8749C36.3389 41.4303 36.0776 41.4314 35.5398 40.885C34.4597 39.7876 33.3696 38.7003 32.3104 37.5828C32.1451 37.4081 32.0128 37.0812 32.0492 36.855C32.1374 36.2906 32.7634 36.1563 33.1966 36.5874C34.0904 37.4787 34.9722 38.3812 35.855 39.2849C35.9597 39.3935 36.0336 39.5323 36.1559 39.7048Z"
              fill="#EF7B3E"
            />
            <path
              d="M42.608 45.6576C44.1621 45.6576 45.7172 45.6531 47.2713 45.6632C47.4708 45.6643 47.732 45.6721 47.8532 45.7919C48.0175 45.9554 48.1696 46.2421 48.1464 46.4559C48.1266 46.6474 47.8852 46.8479 47.6978 46.9766C47.5788 47.0584 47.3793 47.0304 47.2151 47.0304C44.1202 47.0326 41.0253 47.0326 37.9293 47.0326C37.8466 47.0326 37.764 47.036 37.6813 47.0304C37.2393 47.0002 36.9451 46.7202 36.9506 46.3395C36.9561 45.9588 37.257 45.6665 37.6967 45.662C38.8794 45.652 40.0631 45.6576 41.2457 45.6576C41.7009 45.6576 42.1539 45.6576 42.608 45.6576Z"
              fill="#EF7B3E"
            />
            <path
              d="M26.2772 44.1447C24.9138 44.1447 23.5504 44.1481 22.1881 44.1436C21.6823 44.1414 21.3847 43.8626 21.4078 43.437C21.4299 43.0351 21.7263 42.7943 22.2201 42.7943C24.5336 42.7921 26.847 42.7932 29.1594 42.7932C29.6002 42.7932 30.0411 42.7865 30.4809 42.7954C30.9206 42.8044 31.2237 43.0854 31.227 43.4695C31.2303 43.8603 30.9416 44.1414 30.4919 44.1436C29.0855 44.1492 27.6814 44.1447 26.2772 44.1447Z"
              fill="#EF7B3E"
            />
            <path
              d="M31.9555 51.3414C31.2028 51.3324 30.5679 50.6673 30.5866 49.9058C30.6054 49.1522 31.2358 48.533 31.9776 48.5386C32.7392 48.5442 33.3652 49.2004 33.3432 49.9697C33.32 50.73 32.694 51.3503 31.9555 51.3414Z"
              fill="#EF7B3E"
            />
            <path
              d="M56.6784 49.9496C56.6696 50.7122 56.0083 51.3617 55.2632 51.3426C54.527 51.3225 53.9031 50.6708 53.9108 49.9284C53.9186 49.1591 54.5721 48.5186 55.3249 48.541C56.0711 48.5623 56.6861 49.2028 56.6784 49.9496Z"
              fill="#EF7B3E"
            />
          </svg>

          <div>
            <h1 className="font-poppins font-bold text-[20px] pb-1 ">
              SHIP TO AMAZON
            </h1>
            <p className="font-lato font-light-silver font-medium text-[15px]">
              Our staff of trained experts will complete your shipping plan,
              arrange pickup and delivery directly to your assigned Amazon
              fulfillment center
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default AboutUs;
