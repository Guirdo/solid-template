import { createSignal } from "solid-js"

export default function Counter() {
  const [count, setCount] = createSignal(1)

  return(
    <div class="[ flex-column ] [ align-items-center ]">
      <h2>{count()}</h2>

      <button
        onClick={() => setCount(count() + 1)}
      >
        Increment
      </button>
    </div>
  )
}