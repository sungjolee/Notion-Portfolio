import Link from "next/link";
import Animation from "./animation";

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요 이성조입니다.
          <br className="hidden lg:inline-block" />
          하이요!
        </h1>
        <p className="mb-8 leading-relaxed">
          대통령은 헌법과 법률이 정하는 바에 의하여 국군을 통수한다.
          평화통일정책의 수립에 관한 대통령의 자문에 응하기 위하여
          민주평화통일자문회의를 둘 수 있다. 국무총리·국무위원 또는 정부위원은
          국회나 그 위원회에 출석하여 국정처리상황을 보고하거나 의견을 진술하고
          질문에 응답할 수 있다. 대통령은 국무총리·국무위원·행정각부의 장 기타
          법률이 정하는 공사의 직을 겸할 수 없다.
        </p>
        <div className="flex justify-center">
          <Link href="/projects">
            <button className="btn-project inline-flex border-0 py-2 px-6 rounded text-lg">
              프로젝트 보러가기
            </button>
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
}
