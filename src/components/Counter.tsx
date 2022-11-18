import { useState } from "react";

export function Counter() {
  let [value, setValue] = useState(0);

  return (
    <div>
      <span className="p-2 m-2">{value}</span>
      <button className="p-2 m-2 text-white bg-slate-600 rounded" onClick={() => setValue(v => v + 1)}>increment</button>
    </div>
  )
}
