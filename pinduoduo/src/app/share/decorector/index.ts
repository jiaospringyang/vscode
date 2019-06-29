export function Emoji() {
  return (target: object, key: string) => {
    let value = target[key];

    const getter = () => {
      return value;
    };

    const setter = (val: string) => {
      value = `@ ${val} @`;
    };

    return Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true, // 描述属性是否出现在Object.keys()或for in中
      configurable: true // 属性是否配置，以及可删除
    });
  };
}

export function Confirmation(message: string) {
  return (target: object, key: string, descriptor: PropertyDescriptor) => {
    const original = descriptor.value;
    descriptor.value = (...args: any[]) => {
      // tslint:disable-next-line: prefer-const
      let allow = window.confirm(message);

      if (allow) {
        const result = original.apply(this, args);
        return result;
      }

      return null;
    };
    return descriptor;
  };
}
