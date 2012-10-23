/*!
 * jQuery ColorCheckify plugin -- version 0.60
 * Creates a color checkbox
 * @author  Carlos Justiniano (carlos.justiniano@gmail.com)
 *
 * Licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
(function ($) {
   $.fn.colorcheckify = function (options) {
      var defaults = {
         fontsize:'12px', /* default font size */
         checkboxstate:'checked', /* options are checked and unchecked */
         checkstyle:'normal', /* style of checkmark, options are normal and heavy */
         checkcolor:'white', /* default css color, can be color name or hex triplets */
         boxcolor:'#8ACD40', /* default css color, can be color name or hex triplets */
         onClick:null            /* callback function when checkbox is toggled */
      };
      options = $.extend(defaults, options);

      return this.each(function (i) {
         var that = this;
         that.checked = (options.checkboxstate === 'checked') ? true : false;
         var $this = $(this); // wrap current element in jQuery instance

         var fs = Number(options.fontsize.match(/\d/g).join(''));

         $this.css('font-size', options.fontsize)
            .css('background', options.boxcolor)
            .css('-moz-border-radius', '4px')
            .css('-webkit-border-radius', '4px')
            .css('border-radius', '4px')
            .css('cursor', 'pointer')
            .css('width', (fs + 2) + "px")
            .css('height', (fs + 2) + "px")
            .css('text-align', 'center')
            .css('line-height', (fs + 4) + "px")
            .css('color', options.checkcolor)
            .css('padding', '2px')
            .css('-moz-user-select', 'none')
            .css('-webkit-user-select', 'none')
            .css('user-select', 'none');

         //http://www.mistywindow.com/reference/html-characters.php
         if (options.checkboxstate === 'checked') {
            if (options.checkstyle === 'normal')
               $this.html('&#10003;');
            else if (options.checkstyle === 'heavy')
               $this.html('&#10004;');
         } else {
            $this.html('&nbsp;');
         }

         $this.click(function (e) {
            that.checked = !that.checked;
            if (that.checked) {
               if (options.checkstyle === 'normal')
                  $this.html('&#10003;');
               else if (options.checkstyle === 'heavy')
                  $this.html('&#10004;');
            } else {
               $this.html('&nbsp;');
            }
            if (options.onClick !== undefined)
               options.onClick();
            return false;
         });

      });
   };
})(jQuery);

