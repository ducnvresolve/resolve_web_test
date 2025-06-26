import PageHeader from "@/components/PageHeader";
import type { BaseProps } from "@/types/base.types";
import { JobApplyForm } from "./FormSubmit";

export default function Jobs({ params }: BaseProps) {
  return (
    <main className="flex flex-col items-center bg-white">
      <PageHeader params={params} />
      <div className="w-full bg-white border border-transparent border-t-gray-300 flex flex-col items-center gap-6 p-6 md:pt-12 pb-12 -mt-[2px] animate-slideup-very-delayed">
        <div className="flex w-full">
          <div className="w-1/2 flex flex-col items-end justify-center md:-mt-[145px] mr-10 animate-slideup-long">
            <img
              src="/images/resolve-our-team.png"
              loading="lazy"
              alt="resolve-our-team"
              className="object-cover rounded-xl shadow-lg w-3/4 h-auto"
            />
          </div>
          <div className="w-1/2 h-auto z-[10] flex items-center justify-start md:-mt-[145px] animate-slideup-long-delayed">
            <JobApplyForm t={params.t} />
          </div>
        </div>
      </div>
      {/* <div className="w-full max-w-screen-xl flex items-start justify-center px-6">
        Interested in our work? Join Resolve now! Send an email to
        jobs@resolve.com.vn
        <JobApplyForm t={params.t} />
      </div> */}
    </main>
  );
}
