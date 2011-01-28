/**
 *
 * jQuery Simple Table Filter
 *
 * Filters a table column against the value of a dropdown <select>
 * using simple case-insensitive text comparison.
 *
 * Example usage:
 *
 * $(document).ready(function() {
 *     $('select.tablefilter').tableFilter('#myTable');
 *     $('select.filter2ndColumn').tableFilter('#myTable', { column: 2 });
 * });
 *
 */
;(function($) {
    $.fn.tableFilter = function(table, options) {

        var defaults = {
            column: 1   // Defaults to first column
        };

        var settings = $.extend({}, defaults, options);
        settings.column--;

        return this.each(function() {
            var self = $(this);
            self.bind('change.tablefilter blur.tablefilter', main);
            main();

            function main() {
                table = $(table);
                var filter = $.trim(self.val().toLowerCase());
                filterTable(filter, table);
                updateTablesorter(table);
                return false;
            }
        });

        function filterTable(filter, table) {
            $('tbody tr', table).each(function() {
                var td = $('td:eq(' + settings.column + ')', this);
                var text = $.trim(td.text().toLowerCase());
                if (filter == '' || filter == 'all' || filter == text) {
                    $(this).show();
                }
                else {
                    $(this).hide();
                }
            });
        }

        function updateTablesorter(table) {
            table.each(function() {
                if ($(this)[0].config && $(this)[0].config.sortMultiSortKey) {
                    $(this).trigger('update').trigger('appendCache');
                }
            });
        }
    };

})(jQuery);
