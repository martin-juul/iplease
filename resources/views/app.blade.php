<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title inertia>{{ config('app.name', 'IPLease') }}</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
        <link rel="manifest" href="/site.webmanifest">
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#545a5c">
        <meta name="apple-mobile-web-app-title" content="IPLease">
        <meta name="application-name" content="IPLease">
        <meta name="msapplication-TileColor" content="#ededed">
        <meta name="theme-color" content="#ffffff">
        @routes(nonce: Vite::cspNonce())
        <script nonce="{{ Vite::cspNonce() }}">
          Ziggy.url = '{{ config('app.url') }}'
        </script>
        @viteReactRefresh
        @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
