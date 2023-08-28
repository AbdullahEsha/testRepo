import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

const BookAppointment = () => {
  return (
    <div className="py-4 xl:py-6 border-4 border-secondary-color rounded-2xl px-4 xl:px-0">
      <div className="grid sm:grid-cols-2 items-center gap-4 lg:10 xl:gap-14">
        <div className="flex justify-center">
          <div className="xl:w-3/4">
            <h2 className="font-semibold tracking-[4px] text-2xl lg:text-4xl text-primary-color">
              BOOK AN APPOINTMENT
            </h2>
            <p className="my-6 tracking-[4px] font-semibold">
              WE ARE AVAILABLE TO WORK ON YOUR CUSTOMIZED ORDER.
            </p>
            <Link href="/contact-us">
              <Button text="BOOK NOW" />
            </Link>
          </div>
        </div>
        <div className="xl:flex justify-center hidden sm:block">
          <Image
            src="/images/Book_appointment.png"
            alt="Book Appointment"
            width={500}
            height={500}
            className="border-4 border-primary-color rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
