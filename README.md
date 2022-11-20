# ddd-challenge-2022

## Ubiquitous Language

| 用語名                       | コード上で使う用語名の英訳                      | 概要（意味）                                                                                                                     | モデル名 |
| ---------------------------- | ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------- |
| ユーザー（社会人）           | User                                            |                                                                                                                                  |          |
| チャットルームオーナー       | ChatRoomOwner                                   | あるチャットルームを管理する権限を持つチャットメンバーのこと．                                                                   |          |
| チャットルームメンバー       | ChatRoomMember                                  | チャットルームに所属するメンバー．                                                                                               |          |
| チャット                     | Chat                                            |                                                                                                                                  |          |
| チャットルーム               | ChatRoom                                        | チャットメンバーがチャットを行う場所（画面）                                                                                     |          |
| チャットメッセージ           | ChatMessage                                     | チャットルームメンバーが，チャットルームにて投稿するもの（オブジェクト）．                                                       |          |
| チャットメッセージの送信     | SendChatMessage                                 | チャットメッセージの送信．<br>必要であれば対象のチャットルームメンバーに通知を行う．                                             |          |
| 送信予定のチャットメッセージ | ScheduledChatMessage                            | 送信予定時刻が設定されたチャットメッセージのこと．                                                                               |          |
| 送信予定時刻                 | ScheduledPostAt (or ScheduledChatMessagePostAt) | 送信予定のチャットメッセージが実際に送信される予定の時刻                                                                         |          |
| スケジューラー               | ChatMessageScheduler                            | 送信予定のチャットメッセージを定期的に観察（observe）して，送信すべきチャットメッセージがあれば送信を行うプロセスのこと．        |          |
| メンション                   | Mention                                         | チャットルームメンバー が チャットルームにて，対象のチャットルームメンバーを指定して，チャットメッセージを送るアクションのこと． |          |
| メンショングループ           | MentionGroup                                    | チャットループの一部メンバー(複数名)に一斉にメッセージを送信する際に利用するグループのこと                                       |          |
| オーガナイゼーション         | Organization                                    | ユーザーが所属する組織．                                                                                                         |          |
| スケジュールコンテキスト     | ScheduleContext                                 | スケジュール                                                                                                                     |          |

## Domain Model Diaglam

## Note

- コアドメイン: chat
- サブドメイン: users

## コードベース

- prefix に `I` が付いている型は，インタフェースを表す
  - 注： `interface` による型定義ではなく `type alias` を利用しているのは，技術的な優位による選択です
- 実装の簡略化のために，usecase はドメインオブジェクトをそのまま返しているが，実際は Mapper などを用意して DTO 化してコントローラに返したり，ドメインオブジェクトに JS の object 化する処理などを追加する必要がある
