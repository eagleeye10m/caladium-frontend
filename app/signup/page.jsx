import React from "react";
import Link from "next/link";
import { registerUser } from "@/actions/registerAction";

function page(props) {
  return (
    <section className="form-page bg-[--color-beige-1]">
      <div className="form-page__content !w-full xl:py-0 lg:py-[50px]">
        <div className="containers !py-[20px]">
          <div className="row justify-center items-center">
            <div className="lg:w-2/3">
              <div className="px-[50px] py-[50px] md_two:px-[25px] md_two:py-[25px] bg-white shadow-1 rounded-[16px]">
                <h3 className="text-[30px] leading-[1.3] font-bold">ثبت نام</h3>
                <p className="mt-[10px] text-[--color-light-1]">
                  آیا قبلا ثبت نام کردید؟{" "}
                  <Link href="login" className="text-buttons_color">
                    ورود
                  </Link>
                </p>

                <form
                  className="contact-form respondForm__form row py-[-10px] gap-[10px] pt-[30px]"
                  action={registerUser}
                >
                  <div className="lg:w-[49%]">
                    <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      ایمیل *
                    </label>
                    <input name="email" type="text" placeholder="ایمیل" />
                  </div>
                  <div className="lg:w-[49%]">
                    <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      نام کاربری
                    </label>
                    <input type="text" name="username" placeholder="admin" />
                  </div>
                  <div className="lg:w-[49%]">
                    <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      رمز عبور *
                    </label>
                    <input
                      type="text"
                      name="password"
                      placeholder="*********"
                    />
                  </div>
                  <div className="lg:w-[49%]">
                    <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      شماره همراه *
                    </label>
                    <input
                      type="text"
                      name="phone"
                      placeholder="شماره تلفن همراه"
                    />
                  </div>
                  <div className="w-full">
                    <button
                      type="submit"
                      name="submit"
                      id="submit"
                      className="button -md -green-1 hover:text-[--color-green-1] hover:bg-white text-[--color-dark-1] font-medium w-full"
                    >
                      ثبت نام
                    </button>
                  </div>
                </form>

                <div className="leading-[12px] text-text-dark-1 font-medium text-center mt-[20px]">
                  یـا ورود با حساب{" "}
                </div>

                <div className="flex  items-center justify-between pt-[20px] gap-[20px]">
                  <button className="button -sm px-[24px] py-[20px] border-2  border-buttons_color hover:bg-buttons_color hover:text-white text-buttons_color !text-[14px]">
                    Facebook
                  </button>
                  <button className="button -sm px-[24px] py-[20px] border-2 border-[--color-red-3] hover:bg-[--color-red-3] hover:text-white  text-[--color-red-3] !text-[14px]">
                    Google
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
