export default function Blogs() {
  return (
    <div className="w-full flex flex-col gap-6">
      <a
        className="cursor-pointer ease-in-out duration-150 rounded hover:bg-slate-100 hover:p-2"
      >
        <div className="flex flex-row items-center gap-2">
          <h5 className="text-lg font-medium">
            How I got into coding
            </h5>
          <h6 className="text-xs text-slate-500 mt-1">
            01/06/2024
            </h6>
        </div>
        <p className="text-sm text-slate-600 mt-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, nesciunt!
        </p>
      </a>
    </div>
  )
}