---
to: <%= abs_path %>.ts
---
import { useEffect } from 'react';

import {} from 'models/';
import { atom, useRecoilState } from 'recoil';

const <%= hook_name_camel %>State = atom<{} | null>({
  key: '<%= hook_name_camel %>',
  default: null,
});

export const use<%= hook_name %> = () => {
  const [<%= hook_name_camel %>, set<%= hook_name %>] = useRecoilState(<%= hook_name_camel %>State);

  useEffect(() => {
    if (<%= hook_name_camel %> !== null) {
      return;
    }

    const fetch = async () => {
      const res = await fetch('/api/');
      const data = await res.json();

      set<%= hook_name %>(data);
    };

    fetch();
  }, []);

  return { <%= hook_name_camel %> };
};
