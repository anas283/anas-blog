export default function Uses() {
  return (
    <div className="w-full">
      <h4 className="text-3xl text-slate-900 font-bold text-center mb-10">
        Uses
      </h4>
      <h4 className="text-md text-slate-700 font-normal">
        My ever-evolving toolkit, comprising both hardware and software. I try to keep this list updated as much as possible.
      </h4>

      <h4 className="text-lg font-semibold mt-6">Desk</h4>
      <ul className="list-disc text-gray-400 flex flex-col gap-2 mt-3 ml-4">
        <li className="space-x-1">
          <span className="font-medium text-sm text-gray-900">Macbook Air (13", 2020)</span>
          <span>-</span>
          <span className="text-sm text-gray-500">Probably one of the best investments I have ever made!</span>
        </li>
        <li className="space-x-1">
          <span className="font-medium text-sm text-gray-900">AirPods Pro 2</span>
          <span>-</span>
          <span className="text-sm text-gray-500">The best wireless earphones I have ever used</span>
        </li>
      </ul>

      <h4 className="text-lg font-semibold mt-6">Tools</h4>
      <ul className="list-disc text-gray-400 flex flex-col gap-2 mt-3 ml-4">
        <li className="space-x-1">
          <span className="font-medium text-sm text-gray-900">VS Code</span>
          <span>-</span>
          <span className="text-sm text-gray-500">Favorite code editor</span>
        </li>
        <li className="space-x-1">
          <span className="font-medium text-sm text-gray-900">Chrome</span>
          <span>-</span>
          <span className="text-sm text-gray-500">Browser of choice</span>
        </li>
        <li className="space-x-1">
          <span className="font-medium text-sm text-gray-900">Notion</span>
          <span>-</span>
          <span className="text-sm text-gray-500">For notes and personal planner</span>
        </li>
        <li className="space-x-1">
          <span className="font-medium text-sm text-gray-900">Figma</span>
          <span>-</span>
          <span className="text-sm text-gray-500">For wireframing & prototyping</span>
        </li>
      </ul>
    </div>
  )
}

export function generateMetadata() {
  const title = 'Uses | Anas';

  return {
    title,
  };
}