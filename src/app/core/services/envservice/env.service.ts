import { Injectable } from '@angular/core';

export class EnvService {
  // The values that are defined here are the default values that can
  // be overridden by env.js

  // API url
  public apiUrl = '';

  public signUpUrl = '';

  public loginUrl = '';

  // Whether or not to enable debug mode
  public enableDebug = true;

  constructor() {}
}
