// @flow
import React from 'react';
import { render } from '@testing-library/react'
import { ViewContext, Sample } from './Sample';
import { ViewMock } from '../';

describe("sample", () => {
  const setup = () => {
    const view = new ViewMock();
    render(
      <ViewContext.Provider value={view.onRender}>
        <Sample />
      </ViewContext.Provider>
    );
    return { view };
  };

  it("can render", () => {
    expect(view.getProps().count).toBe(0);
  });

  it("can increase count", () => {
    view.getProps().onClick();
    expect(view.getProps().count).toBe(1);
  });
});
