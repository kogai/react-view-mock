// @flow
export class ViewMock<T> {
  renderedProps: T | null = null;

  setProps: T => void = props => {
    this.renderedProps = props;
  };

  getProps: () => T = () => {
    if (this.renderedProps == null) {
      throw new Error('Unreachable');
    }
    return this.renderedProps;
  };

  onRender: T => null = props => {
    this.setProps(props);
    return null;
  };
}
