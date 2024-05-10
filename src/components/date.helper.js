/**
 * This file contains functions for date conversions.
 *
 * use like this:

<template>
  <div>{{ helper.format(myvar, 'dd.MM.yyyy') }}</div>
</template>

<script>
import { helper } from './helper';
[...]
  computed: {
    helper: () => helper,
  },
[...]

</script>

 ***********************************/

import { de } from 'date-fns/locale'
import { format, parse, parseISO } from 'date-fns'

const i18n = { locale: de };

function doParseAndFormat(value, parseSyntax, formatSyntax) {
  return value ? format( parse(value, parseSyntax, new Date(2000, 1, 1)), formatSyntax, { locale: getDateFnsLocale() } ) : '';
}

function getDateFnsLocale() {
  return i18n.locale;
  /*
  let tmp_locale = i18n.locale;
  if(tmp_locale==='en') tmp_locale = 'enGB';
  return locales[ tmp_locale ];
  */
}

export const dateHelper = {

  format(date, formatStr = 'PP') {
    return format(date, formatStr, {
      locale: getDateFnsLocale() // or global.__localeId__
    })
  },

  formatSeconds(value, digits) {
    if(!digits) digits = 2;
    return new Intl.NumberFormat('de-DE', { minimumFractionDigits: digits, maximumFractionDigits: digits }).format(value);
  },

  parseAndFormat(value, parseSyntax, formatSyntax) {
    return doParseAndFormat(value, parseSyntax, formatSyntax);
  },

  formatDateZvoove(value, formatStr) {
    if(formatStr === undefined) formatStr = "dd.MM.yyyy HH:mm";
    return value ? format( parseISO(value), formatStr, { locale: getDateFnsLocale() } ) : '';
  },

  getDateFnsLocale() {
    return getDateFnsLocale();
  },

  getArrayFromObject(obj) {
    if(obj) {
      let result = Object.keys(obj).map(function(key) {
        return obj[key];
      });
      return result;
    }
    return [];
  },

  /**
   * Transforms a php date string (2022-02-22T10:50:37.000000Z) into a js date object.
   * @param {string} phpTimestamp
   * @return {Date|NULL} The resulting Date-object or NULL
   */
  transformPhpDateString(phpDatestring) {
    return parseISO(phpDatestring);
  },

  /**
   * Transforms a php-timestamp into a js date object.
   * @param {string} phpTimestamp
   * @return {Date|NULL} The resulting Date-object or NULL
   */
  transformPhpTimestamp:function(phpTimestamp) {
    if(typeof phpTimestamp === 'string' && phpTimestamp.length>0) {
      return new Date(parseInt(phpTimestamp)*1000);//simple -> exact by the second
    }
    return null;
  },

  /**
   * Transforms a ISO-date string into a PHP timestamp
   * @param {Date} dateObject a javascript Date object
   * @returns {null|int} returns a php timestamp (null if isoDateString is NULL)
   */
  getPhpTimestamp: function (dateObject) {
    if(dateObject && typeof dateObject==="object" && dateObject.getTime) {
      return parseInt(dateObject.getTime() / 1000);
    }
    return null;
  },
}