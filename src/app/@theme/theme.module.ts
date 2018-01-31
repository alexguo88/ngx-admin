import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {NbActionsModule, NbCardModule, NbLayoutModule, NbMenuModule, NbRouteTabsetModule, NbSearchModule, NbSidebarModule, NbTabsetModule, NbThemeModule, NbUserModule, NbCheckboxModule} from '@nebular/theme';
import {FooterComponent, HeaderComponent, SearchInputComponent, ThemeSettingsComponent, ThemeSwitcherComponent, TinyMCEComponent} from './components';
import {CapitalizePipe, PluralPipe, RoundPipe, TimingPipe} from './pipes';
import {OneColumnLayoutComponent, SampleLayoutComponent, ThreeColumnsLayoutComponent, TwoColumnsLayoutComponent} from './layouts';

import {DEFAULT_THEME} from './styles/theme.default';
import {COSMIC_THEME} from './styles/theme.cosmic';

// 基础模块
const BASE_MODULES = [CommonModule, FormsModule, ReactiveFormsModule];

// NB模块
const NB_MODULES = [
  NbCardModule,
  NbLayoutModule,
  NbTabsetModule,
  NbRouteTabsetModule,
  NbMenuModule,
  NbUserModule,
  NbActionsModule,
  NbSearchModule,
  NbSidebarModule,
  NbCheckboxModule,
  NgbModule,
];

// 本模块组件
const COMPONENTS = [
  ThemeSwitcherComponent,
  HeaderComponent,
  FooterComponent,
  SearchInputComponent,
  ThemeSettingsComponent,
  TinyMCEComponent,
  OneColumnLayoutComponent,
  SampleLayoutComponent,
  ThreeColumnsLayoutComponent,
  TwoColumnsLayoutComponent,
];

// 管道
const PIPES = [CapitalizePipe, PluralPipe, RoundPipe, TimingPipe];

// 提供者
const NB_THEME_PROVIDERS = [
  ...NbThemeModule.forRoot({name: 'cosmic'}, [DEFAULT_THEME, COSMIC_THEME]).providers,
  ...NbSidebarModule.forRoot().providers,
  ...NbMenuModule.forRoot().providers,
];


/**
 * 基础主题模块
 */
@NgModule({
  imports: [...BASE_MODULES, ...NB_MODULES],
  exports: [...BASE_MODULES, ...NB_MODULES, ...COMPONENTS, ...PIPES],
  declarations: [...COMPONENTS, ...PIPES],
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: ThemeModule,
      providers: [...NB_THEME_PROVIDERS],
    };
  }
}
