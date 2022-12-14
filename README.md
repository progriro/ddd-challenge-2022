# ddd-challenge-2022

## Ubiquitous Language

| 用語名                       | コード上で使う用語名の英訳                      | 概要（意味）                                                                                                                      |
| ---------------------------- | ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | 
| ユーザー          | User                                            |  サービス使用者のプロフィール情報とシステム全体で一意に特定するエンティティ                                                                                            |
| チャットルームメンバー       | ChatRoomMember                                  | チャットルームに所属するメンバー．                                                                                               | 
| チャット                     | Chat                                            |   ユーザー同士のコミュニケーション手段．                                                                                                                               | 
| チャットルーム               | ChatRoom                                        | チャットメンバーがチャットを行う場所（画面）                                                                                     | 
| チャットメッセージ           | ChatMessage                                     | チャットルームメンバーが，チャットルームにて投稿するもの（オブジェクト）．                                                       |
| チャットメッセージの送信     | SendChatMessage                                 | チャットメッセージの送信．<br>必要であれば対象のチャットルームメンバーに通知を行う．                                             | 
| 送信予定のチャットメッセージ | ScheduledChatMessage                            | 送信予定時刻が設定されたチャットメッセージのこと．                                                                               |
| 送信予定時刻                 | ScheduledPostAt | 送信予定のチャットメッセージが実際に送信される予定の時刻                                                                         |         
| オーガナイゼーション         | Organization                                    | ユーザーが所属する組織．                                                                                                         | 
| オーガナイゼーションメンバー         | OrganizationMember                                   | オーガナイゼーションに所属するメンバー。ユーザーに限らず、ボットやゲストユーザーなども将来的に該当する。                    |    

## Domain Model Diaglam

![domein-model-diagram](https://user-images.githubusercontent.com/38400669/202908773-2582f38f-4c83-4365-9971-97a106b1b0bc.png)

## UseCase Diaglam

| current                                                                                                                         | future                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| <img src="https://user-images.githubusercontent.com/51112816/202909223-9bba74b5-2dd0-4497-8754-055488a32a0e.png" width="500px"> | <img src="https://user-images.githubusercontent.com/51112816/202909229-4af3ea12-e033-4d84-9fea-ca26c485abca.png" width="500px"> |

## Note

- コアドメイン: chat
- サブドメイン: account

## コードベース

- prefix に `I` が付いている型は，インタフェースを表す
  - 注： `interface` による型定義ではなく `type alias` を利用しているのは，技術的な優位による選択です
- 実装の簡略化のために，usecase はドメインオブジェクトをそのまま返しているが，実際は Mapper などを用意して DTO 化してコントローラに返したり，ドメインオブジェクトに JS の object 化する処理などを追加する必要がある
