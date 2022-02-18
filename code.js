<script type="text/javascript">
            window.onload = function() {

                var desktopFallback = "https://youtube.com/watch?v={VIDEO-ID}", //change VIDEO-ID -> Sb2FFnM4eJo {like this video url https://www.youtube.com/watch?v=Sb2FFnM4eJo}
                mobileFallback = "{YourWebsiteURL}", //https://harssh.com/
                app = "vnd.youtube://{VIDEO-ID}"; //change VIDEO-ID -> Sb2FFnM4eJo {like this video url https://www.youtube.com/watch?v=Sb2FFnM4eJo}

                if( /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ) {
                    window.location = app;
                    window.setTimeout(function() {
                        window.location = mobileFallback;
                    }, 25);
                } else {
                    window.location = desktopFallback;
                }

                function killPopup() {
                    window.removeEventListener('pagehide', killPopup);
                }

                window.addEventListener('pagehide', killPopup);

            };
</script>
