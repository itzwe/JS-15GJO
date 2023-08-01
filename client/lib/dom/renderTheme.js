import { insertAfter } from "./insert.js";


function createThemeItem(data) {
  const template = `
    <div class="my-4">
      <div class="w-full px-4 text-3xl text-white font-semibold text-left">
        ${data.title}
      </div>

      <div class="my-3 w-full px-4 text-sm text-white text-left">
        ${data.list}
      </div>

      <div class="flex justify-end px-4">
        <button class="w-33 mb-5 mt-20 inline-flex h-10 cursor-pointer items-center rounded-3xl border border-solid border-white bg-transparent px-3 py-2 text-white">
          <img src="../assets/icon/icon-map-white.svg" alt="지도" />
          <span class="mx-1 text-sm">지도</span>
        </button>
      </div>
  </div>
  `

  return template;
}

export function renderThemeItem(target, data) {
  insertAfter(target, createThemeItem(data))
}

