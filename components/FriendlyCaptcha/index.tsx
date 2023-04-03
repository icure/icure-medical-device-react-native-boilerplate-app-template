import React from 'react';
import {WebView} from 'react-native-webview';

interface FriendlyCaptchaComponentProps {
  sitekey: string;
  onFinish: (captcha: string) => void;
}

export const FriendlyCaptchaComponent = ({sitekey, onFinish}: FriendlyCaptchaComponentProps): JSX.Element => {  
  return (
    <WebView
      originWhitelist={['*']}
      style={{width: '100%', height: 70}}
      source={{
        html: `
          <!DOCTYPE html>
            <html>
              <head>
                <meta charset="utf-8">
                <title>Friendly Captcha Verification</title>
                <script type="module" src="https://cdn.jsdelivr.net/npm/friendly-challenge@0.9.11/widget.module.min.js"></script>
                <script nomodule src="https://cdn.jsdelivr.net/npm/friendly-challenge@0.9.11/widget.min.js"></script>
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <style>
                    html, body {
                        margin: 0;
                        padding: 0;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100%;
                        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
                      }
                </style>
              </head>
              <body>
                <div class="frc-captcha" data-start="auto" data-sitekey=${sitekey} data-callback="doneCallback" data-lang="en"></div>
                <script>
                  function doneCallback(solution) { ReactNativeWebView.postMessage(solution) }
                </script>
              </body>
            </html>
    `,
      }}
      onMessage={event => {
        console.log(event.nativeEvent.data);
        // onFinish(event.nativeEvent.data.split('.')[0]);
        onFinish(event.nativeEvent.data);
      }}
    />
  );
};