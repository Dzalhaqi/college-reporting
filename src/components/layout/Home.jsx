'use client'

import { useEffect, useMemo, useContext } from 'react'
import Image from 'next/image'
import AspectMark from '@/components/AspectMark'
import { ScoreContext } from '@/context/ScoreContext'

export default function Home() { 

  const { data, setData } = useContext(ScoreContext)

  const initialData = useMemo(() => {
    const data = {
      aspek_penilaian_1: {},
      aspek_penilaian_2: {},
      aspek_penilaian_3: {},
      aspek_penilaian_4: {},
    };

    for (let i = 1; i <= 10; i++) {
      data.aspek_penilaian_1[`mahasiswa_${i}`] = 1;
      data.aspek_penilaian_2[`mahasiswa_${i}`] = 1;
      data.aspek_penilaian_3[`mahasiswa_${i}`] = 1;
      data.aspek_penilaian_4[`mahasiswa_${i}`] = 1;
    }

    return data;
  }, []);

  useEffect(() => {
    setData(initialData);
  }, [initialData]);

  const handleSaveData = () => {
    const dataToSave = JSON.stringify(data, null, 2);
    const blob = new Blob([dataToSave], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = "data.json";
    link.click();
    URL.revokeObjectURL(url);
  }

  const handleSelect = ({ aspect, id, value }) => {
    const inputValue = `aspek_penilaian_${aspect}`;
    const inputId = `mahasiswa_${id}`;

    setData((prev) => ({
      ...prev,
      [inputValue]: {
        ...prev[inputValue],
        [inputId]: value,
      },
    }));
  }

  return (
    <>
      <div className="max-w-5xl items-center justify-center text-sm lg:flex bg-white shadow-aesthetic rounded-lg p-6 w-full">
        <h1 className="title-app text-center text-3xl">
          College Reporting App
        </h1>
      </div>

      <div className="marks-container bg-white my-10 flex flex-col gap-x-4 shadow-aesthetic rounded-lg py-5 px-7 w-full overflow-x-auto">
        <div className="flex w-full justify-end">
          <div className="flex w-[77%] justify-evenly gap-x-5">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="w-16 md:w-20 lg:w-40 flex justify-center text-center">
                <h2 className="text-sm md:text-xl">Aspek Penilaian {i + 1}</h2>
              </div>
            ))}
          </div>
        </div>

        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="student-mark-container flex items-center my-4 gap-4">
            <div className="w-[30%] flex gap-x-3 items-center">
              <img src="../../user.svg" alt="logo" className="w-5 h-5" />
              <p className="text-sm md:text-base">Mahasiswa {i + 1}</p>
            </div>
            <div className="w-full flex flex-row justify-evenly gap-x-5">
              {[...Array(4)].map((_, j) => (
                <AspectMark
                  key={j}
                  aspect={j + 1}
                  id={i + 1}
                  onSelect={handleSelect}
                />
              ))}
            </div>
          </div>
        ))}

        <div className="flex justify-end my-4 px-7">
          <button
            onClick={handleSaveData}
            className="bg-gray-800 text-white px-2.5 py-1.5 rounded-lg">
            Simpan
          </button>
        </div>
      </div>
    </>
  );
}