import React from "react";
import { Link } from "react-router-dom";

import backgroundImg from "../image/tie-white-background.png";
import equipment1 from "../image/equipment1.png";
import equipment2 from "../image/equipment2.png";
import equipment3 from "../image/equipment3.png";
import equipment4 from "../image/equipment4.png";
import tieGroup from "../image/tiegroup.png";
import rightArrow from "../image/rightArrow.png";
import office from "../image/office.png";
import rectangle from "../image/rectangle.png";
import postLogo from "../image/postLogo.png";

function Home() {
  return (
    <div>
      <div className="relative mb-20 bg-lightpink py-10 flex justify-between items-center">
        <div className="px-28 mt-28 mb-20 absolute -top-28">
          <p className="text-3xl pb-2.5 pt-40 font-medium">영선산업은 모든 고객분들에게</p>
          <p className="text-3xl pb-10 text-blue font-medium">최고의 경험으로 보답합니다.</p>
          <p className="pb-2.5">영선산업은 넥타이 제조업체에서 10년 이상 축적된 경험 및 기술로</p>
          <p className="pb-2.5">찾아 주시는 고객분들에게 최상의 제품을 전달해 드리기 위해</p>
          <p>항상 최선을 다해 제작합니다.</p>
        </div>
        <div></div>
        <img src={backgroundImg} alt="map background"></img>
      </div>
      <form className="px-28 ">
        <div className="flex flex-col items-center">
          <span className="text-2xl pt-24 pb-1">폴리부터 실크까지, 소량부터 대량까지</span>
          <span className="text-2xl text-blue pb-10">생각하는 모든 것을 만들어 드립니다.</span>
          <span className="pb-2.5">
            영선산업은 10여년 동안 축적된 경험과 기술로 맡겨 주시는 모든 고객분들에게 최고의 만족도를 보장합니다.
          </span>
          <span className="pb-20">고객분들에게 항상 고마운 마음을 담아 최선을 다하겠습니다.</span>
        </div>
        <div className="flex justify-between pb-24 flex-wrap">
          <img src={equipment1} alt="tie equipment" />
          <img src={equipment2} alt="tie equipment" />
          <img src={equipment3} alt="tie equipment" />
          <img src={equipment4} alt="tie equipment" />
        </div>
        <Link to="/design" className="w-full bg-blue h-24 rounded-lg flex items-center justify-around px-20 mb-24">
          <img src={tieGroup} alt="tie group" />
          <span className="text-white font-semibold">도안이 필요하신가요?</span>
          <span className="text-white">쉽고 빠르게 원하는 조합의 도안을 제작해보세요.</span>
          <img src={rightArrow} alt="rightArrow" />
        </Link>
        <div className="flex items-center pb-36 justify-between">
          <div>
            <p className="font-semibold pb-2.5">높은 품질로 전국 기업 뿐만 아니라 관공서,</p>
            <p className="font-semibold pb-12">각종 단체, 행사, 기념과 홍보에 쓰이는 상품을 제작합니다.</p>
            <p className="text-slate-600 pb-2.5">영선산업은 이미지 홍보 단체 상품에 기업의 아이덴티티를 녹여내어</p>
            <p className="text-slate-600 pb-5">
              외적 이미지 및 기업이 주는 인상에 크게 기여할 수 있는 최상급 품질의 상품을 제작해드립니다.
            </p>
            <div className="w-full rounded-lg py-2 flex items-center justify-around bg-slate-200 text-sm">
              <span>Business Promotion</span>
              <img src={rectangle} alt="rectangle" />
              <span>CI / BI 활용 로고 상품</span>
              <img src={rectangle} alt="rectangle" />
              <span>굿즈 상품</span>
            </div>
          </div>
          <img src={office} alt="office" className="ml-6" />
        </div>
      </form>
      <div className="bg-slate-200">
        <div className="px-28 pt-20 pb-12">
          <p className="pb-2.5">THE BEST PARTNERS</p>
          <p className="font-semibold">영선산업은 고객사와 함께합니다.</p>
        </div>
        <div className="flex flex-nowrqp justify-around pb-20 ">
          <img src={postLogo} alt="postLogo" className="mb-2.5 px-2 w-60" />
          <img src={postLogo} alt="postLogo" className="mb-2.5 px-2 w-60" />
          <img src={postLogo} alt="postLogo" className="mb-2.5 px-2 w-60" />
          <img src={postLogo} alt="postLogo" className="mb-2.5 px-2 w-60" />
          <img src={postLogo} alt="postLogo" className="mb-2.5 px-2 w-60" />
          <img src={postLogo} alt="postLogo" className="mb-2.5 px-2 w-60" />
        </div>
      </div>
    </div>
  );
}

export default Home;
