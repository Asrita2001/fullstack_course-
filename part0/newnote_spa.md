```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: Response JSON with message: "<newly given message>".
    deactivate server

Note right of browser: The message entered by the user is created. Javascrip handles the update directly and page reload or other request is not performed
