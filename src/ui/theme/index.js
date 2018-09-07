import { palette } from "./palette";
import {overrides} from './overrides'
import {  createMuiTheme } from '@material-ui/core/styles';

export const { theme } = {
  theme: createMuiTheme({
    palette,
    overrides,
  })
};
