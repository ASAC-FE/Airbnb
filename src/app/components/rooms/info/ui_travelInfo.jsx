"use client";

// Component
import { DynamicSVGComponent } from "@component_rooms/_common/defineSVG";
import Link from "next/link";

export default function TravelInfo({ lodgingInfo }) {
  return (
    <div>
      {/* 간소화 정보 */}
      <div className="py-8 border-b border-customBGGray">
        <h3 className="text-[22px] font-semibold">{lodgingInfo.location}</h3>
        <h3 className="">{lodgingInfo.description}</h3>
        <div className="mt-1 flex items-center space-x-1">
          <DynamicSVGComponent componentName={"Star"} className={"w-4 h-4"} />
          <Link href="/review">
            <button className="border-b border-black hover:cursor-pointer font-semibold">
              {`후기 ${lodgingInfo.reviewCount}개`}
            </button>
          </Link>
        </div>
      </div>

      {/* 호스트 소개 */}
      <div className="py-6 border-b border-customBGGray">
        <div className="flex space-x-6">
          <DynamicSVGComponent
            componentName={"Host"}
            className={"w-[40px] h-[40px]"}
          />
          <div>
            <h3 className="font-semibold">{lodgingInfo.hostName}</h3>
            <h3 className="text-sm text-customTextGray">
              {lodgingInfo.hostExperience}
            </h3>
          </div>
        </div>
      </div>

      {/* 서비스 */}
      <div className="py-8 border-b border-customBGGray">
        <div className="flex flex-col gap-6">
          <ServiceList overviewList={lodgingInfo.overview.list} />
        </div>
      </div>

      {/* 소개 */}
      <div className="py-8 border-b border-customBGGray">
        <div className="line-clamp-6 whitespace-nowrap">
          <h3
            dangerouslySetInnerHTML={{
              __html: lodgingInfo.accommodationOverview,
            }}
          />
        </div>
        <div className="mt-4">
          <span
            className="inline-flex items-center space-x-1 hover:cursor-pointer"
            onClick={() => {
              console.log("onClickHandler 더 보기");
            }}
          >
            <span className="font-semibold border-b border-black">더 보기</span>
            <DynamicSVGComponent
              componentName={"Arrow"}
              className={"w-3 h-3"}
            />
          </span>
        </div>
      </div>

      {/* 숙박 장소 */}
      <div className="py-12 border-b border-customBGGray">
        {/* TODO. "숙박 장소" 텍스트는 차후 string 테이블(?)에서 가져와서 처리할 수 있도록 변경 */}
        <h3 className="text-[22px] font-semibold">숙박 장소</h3>
        <div className="pt-6 flex items-center">
          <AccommodationList accommodationList={lodgingInfo.accommodation} />
        </div>
      </div>

      {/* ---------------------------------------------------------------------------------------- */}

      {/* 숙소 편의시설 */}
      <div className="py-12 border-b border-customBGGray">
        {/* TODO. "숙소 편의시설" 텍스트는 차후 string 테이블(?)에서 가져와서 처리할 수 있도록 변경 */}
        <h3 className="text-[22px] font-semibold">숙소 편의시설</h3>
        <div className="py-6 grid grid-cols-2">
          <AmenitiesList amenitiesList={lodgingInfo.amenitiesList} />
        </div>
        <button className="w-[220px] px-[23px] py-[13px] border border-black rounded-md">
          <div className="font-semibold">편의 시설 모두 보기</div>
        </button>
      </div>
    </div>
  );
}

/**
 * 서비스
 * @param { overviewList : 서비스 목록 }
 */
function ServiceList({ overviewList }) {
  return (
    <>
      {overviewList.map((item) => (
        <>
          <div class="flex gap-x-6">
            <div className="w-[40px] h-[40px] flex justify-center">
              <DynamicSVGComponent
                componentName={item.svgName}
                className={item.svgClassName}
              />
            </div>
            <div>
              <h3 className="font-semibold">{item.title}</h3>
              <h3 className="text-sm text-customTextGray">
                {item.description}
              </h3>
            </div>
          </div>
        </>
      ))}
    </>
  );
}

/**
 * 숙박 장소
 * @param { accommodationList : 숙박 장소 목록 }
 */
function AccommodationList({ accommodationList }) {
  return (
    <div class="flex gap-2">
      {accommodationList.map((item, index) => (
        <div
          className="p-6 border border-#customBGGray rounded-2xl"
          key={index}
        >
          <div className="w-[155px] mb-4">
            <DynamicSVGComponent componentName={"Bed"} className={"w-6 h-6"} />
          </div>
          <div className="mt-2 font-semibold">{item.space}</div>
          <div className="text-sm">{item.bedding}</div>
        </div>
      ))}
    </div>
  );
}

/**
 * 편의 시설
 * ※ 아래와 같은 코드 형식으로도 사용이 가능하네...
 */
function AmenitiesList({ amenitiesList }) {
  const jsxElements = [];
  amenitiesList.forEach((element, index) => {
    const [svgName, amenitiesName, ...other] = element.split(",");

    jsxElements.push(
      <div
        className="pb-4 flex flex-row-reverse justify-end items-center"
        key={index}
      >
        <h3>{amenitiesName}</h3>
        <div className="mr-4 ">
          <DynamicSVGComponent componentName={svgName} className={"w-6 h-6"} />
        </div>
      </div>
    );
  });

  return <>{jsxElements}</>;
}
