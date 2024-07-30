import "../home.css";
import "../../App.css";
import img1 from "../../assets/home/header/hero-vertical-r1.png";
import img2 from "../../assets/home/header/hero-vertical-l1.png";
import img3 from "../../assets/home/header/star-2.svg";
import Button from "../../generalComponent/button1.jsx";
import ImgRotate from "../../generalComponent/imgRotate.jsx";
function header({ scrollY }) {
  return (
    <>
      <section className=" w-[100%] h-[70vh] md:h-[105vh] grid">
        <article className="w-[100%] h-[100%] gridArea flex gap-10 justify-end overflow-hidden">
          <figure className="w-[200px] -rotate-[20deg] ">
            <img
              src={img2}
              alt=""
              className={`-translate-y-[${scrollY / 3 + 60}px]`}
            />
          </figure>
          <figure className="w-[200px] -rotate-[20deg]">
            <img
              src={img1}
              alt=""
              className={`-translate-y-[${-scrollY / 3 + 60}px]`}
            />
          </figure>
        </article>
        <article className="z-10 header-home w-[100%] h-[100.1%] gridArea">
          <div className="w-[100%] h-[100%] bg1"></div>
        </article>
        <article className="z-20 w-[100%] h-[100%] flex justify-center items-center gridArea">
          <div className="w-[100%] h-[80%] 2xl:container flex justify-center pt-8">
            <div className="w-[98%] md:w-[90%] xl:w-[50%] flex flex-wrap content-center">
              <div className="w-[100%] flex justify-between items-center">
                <Button
                  value={"digital engagement"}
                  styleButton={`bg2 text-[rgb(255,246,191)]`}
                />
                <ImgRotate img={img3} />
              </div>
              <h1 className="w-[70%] flex line flex-wrap justify-between content-center capitalize text-[3rem] lg:text-[6rem] text-white font-bold">
                generate unique
              </h1>
              <div className="w-[90%] line justify-between items-center text-white text-[3rem] lg:text-[6rem] font-bold grid">
                <h4 className="gridArea h4-header1">AI Image.</h4>
                <h4 className="gridArea h4-header2">Cyber Pics.</h4>
                <h4 className="gridArea h4-header3">AI Art.</h4>
              </div>
              <p className="w-[75%] text-zinc-400 text-[1rem] lg:text-[1.5rem] py-1">
                Create stunning images quickly and easily with cutting-edge AI
                algorithms.
              </p>
              <div className="w-[100%] py-8 flex justify-center items-center">
                <div
                  className=" w-[95%] h-[60px] relative flex justify-center items-center rounded-full"
                  style={{ boxShadow: "0px 6px 10px 0px black" }}
                >
                  <div className="w-[100%] h-[100%] absolute top-0 rounded-full overflow-hidden">
                    <div className="w-[60px] h-[100px] mb-[30px] ani1 absolute bottom-0"></div>
                  </div>
                  <div className="w-[100%] h-[100%] p-[2px] rounded-full flex justify-center items-center absolute top-0 ">
                    <div className="bg3 w-[100%] h-[100%] rounded-full px-2 items-center flex justify-between">
                      <div className="flex justify-center items-center gap-3 w-[100%] ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                          fill="none"
                          className="text-[rgb(171,236,214)]"
                        >
                          <path
                            d="M10.2093 22.3013L10.7813 22.1852C10.9415 22.153 11.0856 22.0665 11.1892 21.9401C11.2927 21.8137 11.3493 21.6554 11.3493 21.492C11.3493 21.3286 11.2927 21.1703 11.1892 21.0439C11.0856 20.9176 10.9415 20.831 10.7813 20.7989L10.2093 20.6827C9.50409 20.5396 8.85663 20.192 8.34778 19.6831C7.83893 19.1743 7.49126 18.5268 7.34819 17.8216L7.23205 17.2496C7.19994 17.0894 7.11335 16.9453 6.98698 16.8417C6.86062 16.7382 6.70228 16.6816 6.53891 16.6816C6.37553 16.6816 6.2172 16.7382 6.09083 16.8417C5.96447 16.9453 5.87785 17.0894 5.84574 17.2496L5.72961 17.8216C5.58653 18.5268 5.23886 19.1743 4.73002 19.6831C4.22117 20.192 3.5737 20.5396 2.86845 20.6827L2.29651 20.7989C2.13632 20.831 1.99219 20.9176 1.88864 21.0439C1.78509 21.1703 1.72852 21.3286 1.72852 21.492C1.72852 21.6554 1.78509 21.8137 1.88864 21.9401C1.99219 22.0665 2.13632 22.153 2.29651 22.1852L2.86845 22.3013C3.5737 22.4444 4.22117 22.7921 4.73002 23.3009C5.23886 23.8098 5.58653 24.4572 5.72961 25.1624L5.84574 25.7344C5.87785 25.8946 5.96447 26.0387 6.09083 26.1423C6.2172 26.2458 6.37553 26.3024 6.53891 26.3024C6.70228 26.3024 6.86062 26.2458 6.98698 26.1423C7.11335 26.0387 7.19994 25.8946 7.23205 25.7344L7.34819 25.1624C7.49126 24.4572 7.83893 23.8098 8.34778 23.3009C8.85663 22.7921 9.50409 22.4444 10.2093 22.3013Z"
                            fill="currentColor"
                          ></path>
                          <path
                            d="M24.0744 11.9442L26.1793 11.5174C26.3894 11.4744 26.5781 11.3602 26.7137 11.1941C26.8493 11.028 26.9233 10.8202 26.9233 10.6058C26.9233 10.3913 26.8493 10.1835 26.7137 10.0174C26.5781 9.8513 26.3894 9.73711 26.1793 9.69415L24.0744 9.26736C23.0604 9.06158 22.1295 8.56167 21.3978 7.83004C20.6662 7.0984 20.1662 6.16746 19.9605 5.15344L19.5337 3.04857C19.4915 2.83808 19.3777 2.64871 19.2116 2.51265C19.0455 2.37659 18.8375 2.30225 18.6228 2.30225C18.4081 2.30225 18.2001 2.37659 18.034 2.51265C17.868 2.64871 17.7541 2.83808 17.7119 3.04857L17.2851 5.15344C17.0795 6.16754 16.5797 7.09857 15.848 7.83024C15.1164 8.5619 14.1853 9.06176 13.1712 9.26736L11.0663 9.69415C10.8563 9.73711 10.6675 9.8513 10.5319 10.0174C10.3963 10.1835 10.3223 10.3913 10.3223 10.6058C10.3223 10.8202 10.3963 11.028 10.5319 11.1941C10.6675 11.3602 10.8563 11.4744 11.0663 11.5174L13.1712 11.9442C14.1853 12.1498 15.1164 12.6496 15.848 13.3813C16.5797 14.113 17.0795 15.044 17.2851 16.0581L17.7119 18.163C17.7541 18.3735 17.868 18.5628 18.034 18.6989C18.2001 18.8349 18.4081 18.9093 18.6228 18.9093C18.8375 18.9093 19.0455 18.8349 19.2116 18.6989C19.3777 18.5628 19.4915 18.3735 19.5337 18.163L19.9605 16.0581C20.1662 15.0441 20.6662 14.1131 21.3978 13.3815C22.1295 12.6499 23.0604 12.1499 24.0744 11.9442Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                        <input
                          className="input bg-transparent text-[1rem] lg:text-[1.2rem] w-[100%] h-[100%] text-zinc-400"
                          type="text"
                          placeholder="an astronaut riding a horse on mars, hd"
                        />
                      </div>
                      <Button
                        value={"generate"}
                        styleButton={"text-white font-bold button1"}
                        bgP={"bgP"}
                        backgroundGradient1={"backgroundGradient1"}
                        backgroundGradient2={"backgroundGradient2"}
                        backgroundGradient3={"backgroundGradient3"}
                        backgroundGradient4={"backgroundGradient4"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[0%] xl:w-[30%]"></div>
          </div>
        </article>
      </section>
    </>
  );
}

export default header;