import Image from "next/image";
import Link from "next/link";

// MIDDLE LINKS DATA
interface ProductType {
  id: number;
  section: string;
  link: string[];
  ref: string[];
}

const products: ProductType[] = [
  {
    id: 1,
    section: "Pages",
    link: ["About US", "Programs", "Facilities", "Mentors"],
    ref:["aboutUs", "programs", "facilities", "mentors"]
  },
  {
    id: 2,
    section: "Pages",
    link: ["IIC Events", "Insights", "Apply Now", "Contact Us"],
    ref:["IICEvents", "insights", "applyNow", "contactUs"]
  },
  // {
  //     id: 3,
  //     section: "Pages",
  //     link: ['404', 'Instructions', 'License']
  // },
  // {
  //     id: 4,
  //     section: "Others",
  //     link: ['Styleguide', 'Changelog']
  // }
];

const footer = () => {
  return (
    <div className="bg-black mt-0" id="first-section">
      <div className="mx-auto max-w-2xl pt-48 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">
          {/* COLUMN-1 */}

          <div className="col-span-4">
            <h3 className="text-white text-4xl font-semibold leading-9 mb-4 lg:mb-20">
              IIE Centre
                <div className="mb-4 mt-8">
                <p className="text-white text-lg font-normal">Phone: +1 (123) 456-7890</p>
                <p className="text-white text-lg font-normal">Email: info@iiecentre.com</p>
                </div>
              
            </h3>
            <div className="flex gap-4">
              <div className="footer-icons">
                <Link href="https://facebook.com">
                  <Image
                    src={"/images/footer/vec.svg"}
                    alt="facebook"
                    width={15}
                    height={20}
                  />
                </Link>
              </div>
              <div className="footer-icons">
                <Link href="https://x.com/">
                  <Image
                    src={"/images/footer/twitterX.svg"}
                    alt="twitter"
                    width={20}
                    height={20}
                  />
                </Link>
              </div>
              <div className="footer-icons">
                <Link href="https://instagram.com">
                  <Image
                    src={"/images/footer/instagram.svg"}
                    alt="instagram"
                    width={20}
                    height={20}
                  />
                </Link>
              </div>
              <div className="footer-icons">
                <Link href="https://www.linkedin.com/">
                  <Image
                    src={"/images/footer/linkedin.svg"}
                    alt="instagram"
                    width={20}
                    height={20}
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* CLOUMN-2/3 */}

          {products.map((product) => (
            <div key={product.id} className="group relative col-span-2">
              <p className="text-white text-xl font-extrabold mb-9">
                {product.section}
              </p>
              <ul>
                {product.link.map((link: string, index: number) => (
                  <li key={index} className="mb-5">
                  <Link
                    href={`/${product.ref[index]}`}
                    className="text-white text-lg font-normal mb-6 space-links"
                  >
                    {link}
                  </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-4">
            <h3 className="text-white text-xl font-extrabold mb-9">
              Our Location
            </h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.033903294952!2d80.17786927454756!3d13.033513013518924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5261003d615339%3A0x3ac5b7057e33135!2sIIE%20Centre%20and%20Fab%20Lab!5e0!3m2!1sen!2sin!4v1743242028272!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0, borderRadius: "12px" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          
        </div>
      </div>

      {/* All Rights Reserved */}

      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <div className="pt-5 pb-5 px-4 sm:px-6 lg:px-4 border-solid border-t border-footer">
          <div className="mt-4 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 xl:gap-x-8">
            <div className="flex justify-center md:justify-start">
              <h3 className="text-center md:text-start text-offwhite text-lg ">
                @2025 - All Rights Reserved by IIE Centre
              </h3>
            </div>
            <div className="flex justify-center md:justify-end">
              <Link href="/">
                <h3 className="text-offwhite pr-6">Privacy policy</h3>
              </Link>
              <Link href="/">
                <h3 className="text-offwhite pl-6 border-solid border-l border-footer">
                  Terms & conditions
                </h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
