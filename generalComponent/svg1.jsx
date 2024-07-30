import React from 'react'

function svg1({styleSvg}) {
  return (
    <>
            <div className={`${styleSvg}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <path
                d="M0.916471 22.0001C1.15957 22 1.39269 21.9034 1.56455 21.7315L7.63197 15.6641L8.77597 16.8484C9.63822 17.7596 10.8266 18.2916 12.0806 18.3279C12.4986 18.3292 12.9137 18.2588 13.308 18.1198C13.9171 17.9101 14.4523 17.528 14.8485 17.02C15.2448 16.512 15.485 15.8999 15.5401 15.258C15.6395 14.3284 15.5706 13.3884 15.3366 12.4832L15.1404 11.5281C15.1032 11.3753 15.106 11.2156 15.1483 11.0642C15.1907 10.9128 15.2713 10.7749 15.3824 10.6636L16.8371 9.20798C16.8945 9.15037 16.9722 9.11748 17.0535 9.11631C17.082 9.111 17.1115 9.11377 17.1385 9.1243C17.1655 9.13482 17.1891 9.1527 17.2066 9.1759C17.667 9.66417 18.2864 9.97226 18.9536 10.0448C19.6208 10.1174 20.292 9.94974 20.8466 9.5719C21.1721 9.33988 21.4431 9.0397 21.6407 8.69227C21.8383 8.34484 21.9578 7.95851 21.9909 7.56018C22.0239 7.16185 21.9698 6.7611 21.8322 6.38584C21.6946 6.01058 21.4768 5.66983 21.1941 5.38731L16.6831 0.874564C16.22 0.399823 15.6046 0.102991 14.9448 0.0359656C14.2849 -0.0310598 13.6225 0.135986 13.0733 0.507897C12.7478 0.739844 12.4767 1.03996 12.279 1.38736C12.0813 1.73475 11.9617 2.12107 11.9286 2.5194C11.8954 2.91773 11.9495 3.3185 12.087 3.6938C12.2246 4.0691 12.4423 4.4099 12.725 4.69248L12.7946 4.76215C12.8471 4.81504 12.8766 4.88654 12.8766 4.96106C12.8766 5.03559 12.8471 5.10709 12.7946 5.15998L11.328 6.62665C11.2155 6.73892 11.0757 6.82001 10.9224 6.86196C10.7691 6.9039 10.6075 6.90526 10.4535 6.8659L9.70455 6.67431C8.78335 6.43373 7.82629 6.36137 6.87939 6.46073C6.2078 6.53029 5.5701 6.79039 5.04145 7.21039C4.5128 7.63038 4.11524 8.19276 3.89564 8.83123C3.65599 9.48734 3.60873 10.1982 3.75944 10.8803C3.91014 11.5624 4.25252 12.1872 4.7463 12.6812L6.3578 14.3496L0.268388 20.4353C0.140229 20.5635 0.0529568 20.7268 0.0176032 20.9046C-0.0177504 21.0824 0.000402331 21.2667 0.0697665 21.4342C0.139131 21.6016 0.256592 21.7448 0.407301 21.8455C0.55801 21.9462 0.7352 22 0.916471 22.0001ZM5.62355 9.44173C5.72685 9.12944 5.91846 8.85379 6.17519 8.64814C6.43191 8.4425 6.74274 8.31569 7.07005 8.28306C7.28109 8.2611 7.49313 8.25008 7.7053 8.25006C8.22534 8.25009 8.74322 8.31694 9.24622 8.44898L10.0006 8.64148C10.4628 8.75842 10.9475 8.7536 11.4072 8.62749C11.867 8.50138 12.2863 8.25828 12.6241 7.9219L14.0908 6.45523C14.4866 6.0583 14.7088 5.52066 14.7088 4.96015C14.7088 4.39964 14.4866 3.86199 14.0908 3.46506L14.0211 3.3954C13.9262 3.30071 13.8532 3.18635 13.8073 3.06039C13.7614 2.93443 13.7437 2.79993 13.7554 2.66637C13.7671 2.53282 13.808 2.40346 13.8751 2.28741C13.9422 2.17136 14.034 2.07145 14.144 1.99473C14.3396 1.87632 14.57 1.82899 14.7964 1.86071C15.0229 1.89244 15.2314 2.00129 15.387 2.1689L19.9006 6.68256C19.9955 6.77725 20.0685 6.89161 20.1145 7.01757C20.1604 7.14353 20.1781 7.27803 20.1664 7.41159C20.1547 7.54514 20.1138 7.67451 20.0467 7.79055C19.9795 7.9066 19.8877 8.00651 19.7778 8.08323C19.5801 8.20326 19.3467 8.25062 19.1178 8.21716C18.8889 8.18369 18.6789 8.07151 18.5238 7.8999C18.3352 7.70543 18.1095 7.55073 17.8602 7.44493C17.6108 7.33913 17.3427 7.28437 17.0718 7.2839C16.5003 7.2865 15.9523 7.51136 15.5437 7.9109L14.0899 9.36565C13.7598 9.696 13.5192 10.105 13.3909 10.554C13.2626 11.0031 13.2508 11.4774 13.3566 11.9323L13.5573 12.9021C13.7423 13.6093 13.7985 14.3439 13.7232 15.071C13.7013 15.3675 13.5928 15.651 13.411 15.8864C13.2293 16.1217 12.9825 16.2984 12.7011 16.3946C12.2322 16.5179 11.738 16.5059 11.2756 16.3599C10.8133 16.2139 10.4017 15.9399 10.0886 15.5696L6.0553 11.3988C5.8038 11.148 5.62947 10.8303 5.55295 10.4835C5.47643 10.1366 5.50093 9.77509 5.62355 9.44173Z"
                fill="currentColor"
              ></path>
            </svg>
            </div>
    </>
  )
}

export default svg1