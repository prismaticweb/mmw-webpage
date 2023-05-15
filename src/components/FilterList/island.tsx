import * as styles from "./index.css";

import { createMemo, createSignal, For, Show } from "solid-js";
import type { Component } from "solid-js";

export type FilterListProps = {
  source: Map<string, string[]>;
}

export const FilterList: Component<FilterListProps> = (props) => {
  const [activeFilter, setActiveFilter] = createSignal(Array.from(props.source.keys())[0]);
  const activeList = createMemo(() => {
    const list = props.source.get(activeFilter()) ?? [];
    const midIndex = Math.floor(list!.length / 2);
    const firstPart = list.length > 5 ? list.slice(0, midIndex) ?? [] : list;
    const secondPart = list.length > 5 ? list.slice(midIndex) ?? [] : [];
    return [firstPart, secondPart];
  });

  return (
    <>
      <menu class={styles.filterSelection}>
        <For each={Array.from(props.source.keys())} fallback={""}>
          {(filter) => <li><button
            onClick={() => { setActiveFilter(filter); console.log(filter) }}
            class={styles.filter({ selected: filter === activeFilter() })} textContent={filter} /></li>}
        </For>
      </menu>
      <div class={styles.listWrapper}>
        <ol class={styles.list}>
          <For each={activeList()[0]}>
            {(item) => <li textContent={item} />}
          </For>
        </ol>
        <Show when={activeList()[1]?.length > 0}>
          <ol class={styles.list}>
            <For each={activeList()[1]}>
              {(item) => <li textContent={item} />}
            </For>
          </ol>
        </Show>
      </div>
    </>
  )
}