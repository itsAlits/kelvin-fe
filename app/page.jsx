import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto min-h-screen flex items-center">
      <div className="w-full wraper-content">
        <div className="wraper-image flex justify-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/id/2/2d/Logo-unud-baru.png"
            alt=""
            className="w-20"
          />
        </div>
        <div className=" text-center mt-6">
          <h1
            className="text-3xl font-semibold
          "
          >
            Apa yang bisa saya bantu?
          </h1>
          <p className="mt-2 opacity-80">
            Cari segala pertanyaan yang membuat kamu bingung tentang kampus
            udayana ini
          </p>
        </div>
        <form action="" className="flex justify-center mt-6">
          <div className="w-2/3  relative">
            <input
              type="text"
              className="input w-full input-bordered rounded-full p-7  text-md"
              placeholder="Masukan Inputanmu"
            />

            <div className=" absolute right-2 top-2">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="size-10"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm.53 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v5.69a.75.75 0 0 0 1.5 0v-5.69l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </form>
        <div className="mt-14 flex justify-center">
          <div className="space-y-2 w-2/3">
            <div className="italic">Jawaban :</div>
            <div className="w-full p-4 bg-neutral rounded">
              <h1>Response</h1>
            </div>
          </div>
        </div>

        <div className="mt-14 flex justify-center">
          <div className="space-y-3 w-2/3">
            <div className="collapse collapse-arrow rounded bg-neutral">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-md font-medium">
                1. Bagaiaman Cara Membayar UKT dengan Bank BCA
              </div>
              <div className="collapse-content">
                <p>hello</p>
              </div>
            </div>
            <div className="collapse collapse-arrow rounded bg-neutral">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-md font-medium">
                2. Bagaiaman Step selanjutnya ketika saya sudah melakukan
                pembayaran
              </div>
              <div className="collapse-content">
                <p>hello</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
