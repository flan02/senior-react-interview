import { PropDrilling } from "../PropDrilling";
import { PassChildrenAsProp } from "../PassChildrenAsProp";
import { ProviderAvoidPropDrilling } from "../ProviderAvoidPropDrilling";

type ComponentProps = {};

export const MidLevel1 = (props: ComponentProps) => {
  return (
    <>
      <PropDrilling />
      <PassChildrenAsProp>
        <div> Component passed as children </div>
      </PassChildrenAsProp>
      <ProviderAvoidPropDrilling />
    </>
  );
};
