/**
 * CallToAction (Partial)
 */

import ImageFallback from "@/helpers/ImageFallback";
import { markdownify } from "@/lib/utils/textConverter";
import { Call_to_action } from "@/types";
import Link from "next/link";

interface PageData {
  notFound?: boolean;
  content?: string;
  frontmatter: Call_to_action;
}

const CallToAction = ({ data }: { data: PageData }) => {

  // @MP Show scaled icons
  const actualWidth = 268;
  const actualHeight = 190;
  const scale = 2;
  let width = actualWidth / scale;
  let height = actualHeight / scale;

  return (
    <>
      {data.frontmatter.enable && (
        // <section className="mb-28">
        <section className="mt-2">
          <div className="container">
            <div className="rounded-xl /*bg-theme-light*/ px-4 py-16  xl:p-20">
              <div className="row items-center justify-between">
                <div className="mb-10 md:col-5 lg:col-4 md:order-2 md:mb-0">
                  <ImageFallback
                    className="rounded-md object-cover h-{height} w-{width}"
                    src={data.frontmatter.image}
                    width={width}
                    height={height}
                    alt="cta-image"
                  />
                </div>
                <div className="md:col-7 md:order-1">
                  <h2
                    dangerouslySetInnerHTML={markdownify(
                      data.frontmatter.title,
                    )}
                    className="mb-2"
                  />
                  <p
                    dangerouslySetInnerHTML={markdownify(
                      data.frontmatter.description,
                    )}
                    className="mb-6"
                  />
                  {data.frontmatter.button.enable && (
                    <Link
                      className="btn btn-primary"
                      href={data.frontmatter.button.link}
                    >
                      {data.frontmatter.button.label}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CallToAction;
