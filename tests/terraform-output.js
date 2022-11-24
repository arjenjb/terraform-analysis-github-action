let planOutput = `module.kangaroo_prod.google_service_account.kangaroo_service_account: Refreshing state... [id=projects/ag5-team-platform/serviceAccounts/kangaroo-prod@ag5-team-platform.iam.gserviceaccount.com]
module.kangaroo_test.google_pubsub_topic.kangaroo_pubsub_topic: Refreshing state... [id=projects/ag5-team-platform/topics/kangaroo-test-pubsub-topic]
module.kangaroo_prod.google_pubsub_topic.kangaroo_pubsub_topic: Refreshing state... [id=projects/ag5-team-platform/topics/kangaroo-prod-pubsub-topic]
module.kangaroo_test.google_service_account.kangaroo_service_account: Refreshing state... [id=projects/ag5-team-platform/serviceAccounts/kangaroo-test@ag5-team-platform.iam.gserviceaccount.com]
module.kangaroo_test.google_pubsub_topic_iam_binding.binding: Refreshing state... [id=projects/ag5-team-platform/topics/kangaroo-test-pubsub-topic/roles/pubsub.publisher]
module.kangaroo_prod.google_pubsub_topic_iam_binding.binding: Refreshing state... [id=projects/ag5-team-platform/topics/kangaroo-prod-pubsub-topic/roles/pubsub.publisher]
module.skills-systemtests.aws_iam_role.service-role: Refreshing state... [id=codebuild-skills-systemtests-service-role]
module.go-test-lambda.aws_iam_policy.lambda_logging: Refreshing state... [id=arn:aws:iam::911184320458:policy/lambda_terraform-go-test-lambda_logging]
aws_ecr_repository.ag5-codebuild-base: Refreshing state... [id=ag5-codebuild-base]
module.go-html-to-pdf-lambda.aws_iam_policy.lambda_logging: Refreshing state... [id=arn:aws:iam::911184320458:policy/lambda_go-html-to-pdf-lambda_logging]
module.prod_scim_berserk-panini.module.scim-service.data.aws_iam_policy_document.ecs-assume-role-policy: Reading...
module.ag5-apis-python-grpc-builder.aws_iam_role.service-role: Refreshing state... [id=codebuild-ag5-apis-python-grpc-builder-service-role]
module.update-lokalise.aws_iam_role.service-role: Refreshing state... [id=codebuild-update-lokalise-service-role]
module.kangaroo_test.module.kangaroo-service.data.aws_iam_policy_document.ecs-assume-role-policy: Reading...
module.prod_scim_berserk-panini.module.scim-service.data.aws_iam_policy_document.ecs-assume-role-policy: Read complete after 0s [id=320642683]
module.kangaroo_test.module.kangaroo-service.data.aws_iam_policy_document.ecs-assume-role-policy: Read complete after 0s [id=320642683]
module.kangaroo_prod.aws_iam_policy.kangaroo_service_account_ssm_policy: Refreshing state... [id=arn:aws:iam::911184320458:policy/kangaroo-prod-ssm-policy]
module.skills-integration-systemtests.aws_iam_role.build-trigger-role[0]: Refreshing state... [id=codebuild-skills-integration-systemtests-trigger]
module.go-test-lambda.aws_iam_role.aws_lambda_role: Refreshing state... [id=aws_terraform-go-test-lambda_lambda_role]
module.siem-prod.aws_sqs_queue.queue: Refreshing state... [id=https://sqs.eu-central-1.amazonaws.com/911184320458/siem-ingester-prod]
module.scim_service_descriptor.aws_ecr_repository.default: Refreshing state... [id=qr3-scim-service]
module.update-ag5-blog.aws_cloudwatch_event_rule.trigger_event_rule["every-two-hours-between-work-hours-day"]: Refreshing state... [id=every-two-hours-between-work-hours-day]
module.prod_hemingway_brave-mclaren.module.hemingway-service.data.aws_iam_policy_document.ecs-assume-role-policy: Reading...
module.prod_hemingway_brave-mclaren.module.hemingway-service.data.aws_iam_policy_document.ecs-assume-role-policy: Read complete after 0s [id=320642683]
module.kangaroo_prod.module.kangaroo-service.data.aws_iam_policy_document.ecs-assume-role-policy: Reading...
module.kangaroo_prod.module.kangaroo-service.data.aws_iam_policy_document.ecs-assume-role-policy: Read complete after 0s [id=320642683]
module.auth-support-service_descriptor.aws_ecr_repository.default: Refreshing state... [id=auth-support-service]
module.parq-entity-cloudevents-test.aws_sqs_queue.queue: Refreshing state... [id=https://sqs.eu-central-1.amazonaws.com/911184320458/parq-entity-cloudevents-test]
module.parq-fetcher_service_descriptor.aws_ecr_repository.default: Refreshing state... [id=go-parq-fetcher]
module.compliance-test.aws_sqs_queue.queue: Refreshing state... [id=https://sqs.eu-central-1.amazonaws.com/911184320458/compliance-test]
module.js-monorepo-tests.data.aws_caller_identity.current: Reading...
aws_iam_policy.lambda_siem_event_ingester_logging: Refreshing state... [id=arn:aws:iam::911184320458:policy/lambda_ag5-aws-siem-event-ingester_logging]
aws_iam_policy.lambda_siem_enricher_logging: Refreshing state... [id=arn:aws:iam::911184320458:policy/lambda_ag5-aws-siem-enricher_logging]
aws_vpc.qr3: Refreshing state... [id=vpc-4f0be826]
aws_iam_policy.super_admin: Refreshing state... [id=arn:aws:iam::911184320458:policy/super_admin]
aws_lb.qr3-private-loadbalancer: Refreshing state... [id=arn:aws:elasticloadbalancing:eu-central-1:911184320458:loadbalancer/app/qr3-private/77d1fbbf8e55d03f]
module.js-monorepo-tests.data.aws_caller_identity.current: Read complete after 1s [id=911184320458]
module.filestorage.aws_iam_policy.s3-rw-access: Refreshing state... [id=arn:aws:iam::911184320458:policy/grimlock-ecs-filestorage-service]
module.sso_service_descriptor.aws_ecr_repository.default: Refreshing state... [id=qr3-sso-server]
aws_cloudwatch_event_rule.guardduty_event_rule: Refreshing state... [id=capture-guardduty-events]
module.olympus_lms_import_service_descriptor.aws_ecr_repository.default: Refreshing state... [id=go-olympus-lms-import-service]
module.ag5-apis-python-grpc-builder.data.aws_caller_identity.current: Reading...
module.ag5-apis-python-grpc-builder.data.aws_caller_identity.current: Read complete after 0s [id=911184320458]
module.prod_pippi-service_courageous-parrot.module.pippi-service.data.aws_iam_policy_document.ecs-assume-role-policy: Reading...
module.prod_pippi-service_courageous-parrot.module.pippi-service.data.aws_iam_policy_document.ecs-assume-role-policy: Read complete after 0s [id=320642683]
module.prod_scim_fearless-sturgeon.module.scim-service.data.aws_iam_policy_document.ecs-assume-role-policy: Reading...
module.prod_scim_fearless-sturgeon.module.scim-service.data.aws_iam_policy_document.ecs-assume-role-policy: Read complete after 0s [id=320642683]
module.build-smalltalk-image.aws_iam_role.service-role: Refreshing state... [id=codebuild-build-smalltalk-image-service-role]
aws_ecs_cluster.qr3: Refreshing state... [id=arn:aws:ecs:eu-central-1:911184320458:cluster/QR3GrimlockCluster]
module.kangaroo_service_descriptor.aws_ecr_repository.default: Refreshing state... [id=go-kangaroo-service]
module.prod_sso_shimmering-duck.module.sso-service.data.aws_iam_policy_document.ecs-assume-role-policy: Reading...
module.prod_sso_shimmering-duck.module.sso-service.data.aws_iam_policy_document.ecs-assume-role-policy: Read complete after 0s [id=320642683]
module.ag5-apis-grpc-builder.data.aws_caller_identity.current: Reading...
module.ag5-apis-grpc-builder.data.aws_caller_identity.current: Read complete after 0s [id=911184320458]
module.auth-service_descriptor.aws_ecr_repository.default: Refreshing state... [id=hvr-auth-service]
aws_iam_role.aws_siem_enricher_lambda_role: Refreshing state... [id=aws_siem_enricher_sns_lambda_role]
aws_iam_policy.ag5_pull_ecr_images: Refreshing state... [id=arn:aws:iam::911184320458:policy/ag5-pull-ecr-images]
aws_ecr_repository.qr3-iauditor-import-service: Refreshing state... [id=qr3-iauditor-import-service]
aws_iam_policy.ag5_skills_systemtest_parameter_store_read: Refreshing state... [id=arn:aws:iam::911184320458:policy/ag5-skills-systemtest-parameter-store-read]
module.go-release-builder.aws_iam_role.service-role: Refreshing state... [id=codebuild-go-release-builder-service-role]
module.skills-integration-systemtests.data.aws_caller_identity.current: Reading...
module.go-release-builder.data.aws_caller_identity.current: Reading...
module.skills-integration-systemtests.data.aws_caller_identity.current: Read complete after 0s [id=911184320458]
aws_ssm_parameter.qr3-iauditor-prod-client-config: Refreshing state... [id=/qr3/service/integration/klmcargo-iauditor-import-service/prod/client-configuration]
data.aws_iam_policy_document.ecs-assume-role-policy: Reading...
data.aws_iam_policy_document.ecs-assume-role-policy: Read complete after 0s [id=320642683]
aws_alb.qr3: Refreshing state... [id=arn:aws:elasticloadbalancing:eu-central-1:911184320458:loadbalancer/app/qr3-grimlock/34eb4ba3219fcc1e]
module.go-release-builder.data.aws_caller_identity.current: Read complete after 0s [id=911184320458]
module.filestorage.aws_ecr_repository.qr3-filestorage: Refreshing state... [id=qr3-filestorage]
aws_sns_topic.aws_siem_enricher_sns: Refreshing state... [id=arn:aws:sns:eu-central-1:911184320458:ag5_siem_raw_sns]
aws_iam_policy.pdf_sign_ca_cert_parameterstore_r: Refreshing state... [id=arn:aws:iam::911184320458:policy/pdf-sign-ca-cert-ssm-ro]
aws_iam_policy.olympus-lms-import-service-write-s3: Refreshing state... [id=arn:aws:iam::911184320458:policy/olympus-lms-import-service-write-s3]
module.python-libs-tests.data.aws_caller_identity.current: Reading...
aws_iam_policy.s3_prototype_build_artifacts_list_and_delete: Refreshing state... [id=arn:aws:iam::911184320458:policy/s3-prototype-build-artifacts-list-and-delete]
aws_sns_topic.ag5_siem_ingester_sns: Refreshing state... [id=arn:aws:sns:eu-central-1:911184320458:ag5_siem_ingester_sns]
module.python-libs-tests.data.aws_caller_identity.current: Read complete after 0s [id=911184320458]
aws_sqs_queue.parq-eventchanges-prod: Refreshing state... [id=https://sqs.eu-central-1.amazonaws.com/911184320458/parq-eventchanges-prod]
module.skills-integration-systemtests.aws_cloudwatch_event_rule.trigger_event_rule["run-daily-skills-integration-systemtests"]: Refreshing state... [id=run-daily-skills-integration-systemtests]
aws_iam_policy.ag5_skills_integration_systemtest_parameter_store_read: Refreshing state... [id=arn:aws:iam::911184320458:policy/ag5-skills-integration-systemtest-parameter-store-read]
aws_ecr_repository.qr3-alphatrion: Refreshing state... [id=qr3-alphatrion-pdfsigner-service]
aws_ecr_repository.qr3-mirage: Refreshing state... [id=qr3-mirage-endpoint-service]
aws_ssm_parameter.olympus-lms-import-service-acceptance-api-key: Refreshing state... [id=/qr3/service/integration/olympus-lms-import-service/acceptance/api-key]
aws_ssm_parameter.pippi-service-courageous-parrot-auth-key: Refreshing state... [id=/qr3/service/pippi/prod/preshared-auth-key]
aws_iam_user.ci: Refreshing state... [id=ci]
aws_iam_policy.qr3-access-auth-prod-public-key: Refreshing state... [id=arn:aws:iam::911184320458:policy/qr3-access-auth-prod-public-key]
aws_iam_policy.ag5-access-github-ci-private-key: Refreshing state... [id=arn:aws:iam::911184320458:policy/ag5-access-github-ci-private-key]
module.dev_auth-support-service.module.auth-support-service.data.aws_iam_policy_document.ecs-assume-role-policy: Reading...
module.dev_auth-support-service.module.auth-support-service.data.aws_iam_policy_document.ecs-assume-role-policy: Read complete after 0s [id=320642683]
aws_iam_policy.update-ag5-blog: Refreshing state... [id=arn:aws:iam::911184320458:policy/update-ag5-blog]
module.siem-test.aws_sqs_queue.queue: Refreshing state... [id=https://sqs.eu-central-1.amazonaws.com/911184320458/siem-ingester-test]
module.skills-systemtests.aws_cloudwatch_event_rule.trigger_event_rule["run-daily-skills-systemtests"]: Refreshing state... [id=run-daily-skills-systemtests]
module.ag5-apis-grpc-builder.aws_iam_role.service-role: Refreshing state... [id=codebuild-ag5-apis-grpc-builder-service-role]
module.go-html-to-pdf-lambda.aws_iam_role.aws_lambda_role: Refreshing state... [id=aws_go-html-to-pdf-lambda_lambda_role]
module.pippi_service_descriptor.aws_ecr_repository.default: Refreshing state... [id=pippi-import-service]
aws_sns_topic.aws_siem_ingester_sns: Refreshing state... [id=arn:aws:sns:eu-central-1:911184320458:aws_siem_ingester_sns]
aws_iam_policy.ag5_packages_rw: Refreshing state... [id=arn:aws:iam::911184320458:policy/ag5-packages-rw]
module.filestorage.data.aws_iam_policy_document.ecs-assume-role-policy: Reading...
module.filestorage.data.aws_iam_policy_document.ecs-assume-role-policy: Read complete after 0s [id=320642683]
aws_iam_policy.ag5_notify_sns_imagebuilder: Refreshing state... [id=arn:aws:iam::911184320458:policy/ag5-notify-sns-imagebuilder]
aws_iam_policy.ag5_slack_notifier_lambda_invoke: Refreshing state... [id=arn:aws:iam::911184320458:policy/ag5-slack-notifier-lambda-invoke]
module.acceptance_olympus-lms-import_faithful-alligator.module.olympus-lms-import-service.data.aws_iam_policy_document.ecs-assume-role-policy: Reading...
module.acceptance_olympus-lms-import_faithful-alligator.module.olympus-lms-import-service.data.aws_iam_policy_document.ecs-assume-role-policy: Read complete after 0s [id=320642683]
module.update-lokalise.data.aws_caller_identity.current: Reading...
aws_iam_policy.ag5_slack_token_parameter_store_read: Refreshing state... [id=arn:aws:iam::911184320458:policy/ag5-slack-token-parameter-store-read]
module.parq-fetcher_test.module.parq-fetcher-service.data.aws_iam_policy_document.ecs-assume-role-policy: Reading...
module.parq-fetcher_test.module.parq-fetcher-service.data.aws_iam_policy_document.ecs-assume-role-policy: Read complete after 0s [id=320642683]
aws_iam_role.aws_siem_ingester_lambda_role: Refreshing state... [id=aws_siem_ingester_sns_lambda_role]
module.update-lokalise.data.aws_caller_identity.current: Read complete after 0s [id=911184320458]
aws_ecr_repository.qr3-wololo: Refreshing state... [id=go-wololo-service]
aws_ecr_repository.qr3-scorn: Refreshing state... [id=qr3-scorn-dataset-service]
aws_s3_bucket.qr3-terraform-state: Refreshing state... [id=qr3-terraform-state]
module.python-libs-release-builder.data.aws_caller_identity.current: Reading...
aws_iam_user.terraform: Refreshing state... [id=terraform]
aws_sqs_queue.parq-eventchanges-test: Refreshing state... [id=https://sqs.eu-central-1.amazonaws.com/911184320458/parq-eventchanges-test]
module.python-libs-release-builder.data.aws_caller_identity.current: Read complete after 0s [id=911184320458]
module.update-ag5-blog.aws_iam_role.service-role: Refreshing state... [id=codebuild-update-ag5-blog-service-role]
module.python-libs-release-builder.aws_iam_role.service-role: Refreshing state... [id=codebuild-python-libs-release-builder-service-role]
module.skills-integration-systemtests.aws_iam_role.service-role: Refreshing state... [id=codebuild-skills-integration-systemtests-service-role]
module.parq-entity-cloudevents-prod.aws_sqs_queue.queue: Refreshing state... [id=https://sqs.eu-central-1.amazonaws.com/911184320458/parq-entity-cloudevents-prod]
module.compliance-prod.aws_sqs_queue.queue: Refreshing state... [id=https://sqs.eu-central-1.amazonaws.com/911184320458/compliance-prod]
module.kangaroo_test.aws_iam_policy.kangaroo_service_account_ssm_policy: Refreshing state... [id=arn:aws:iam::911184320458:policy/kangaroo-test-ssm-policy]
module.update-ag5-blog.data.aws_caller_identity.current: Reading...
module.update-ag5-blog.data.aws_caller_identity.current: Read complete after 0s [id=911184320458]
module.skills-systemtests.data.aws_caller_identity.current: Reading...
module.skills-systemtests.data.aws_caller_identity.current: Read complete after 0s [id=911184320458]
module.build-smalltalk-image.data.aws_caller_identity.current: Reading...
module.siem-enricher.aws_sqs_queue.queue: Refreshing state... [id=https://sqs.eu-central-1.amazonaws.com/911184320458/ag5_siem_raw_sqs]
module.update-ag5-blog.aws_iam_role.build-trigger-role[0]: Refreshing state... [id=codebuild-update-ag5-blog-trigger]
module.build-smalltalk-image.data.aws_caller_identity.current: Read complete after 0s [id=911184320458]
module.js-monorepo-tests.aws_iam_role.service-role: Refreshing state... [id=codebuild-js-monorepo-tests-service-role]
module.python-libs-tests.aws_iam_role.service-role: Refreshing state... [id=codebuild-python-libs-tests-service-role]
module.auth-service.module.auth-service.data.aws_iam_policy_document.ecs-assume-role-policy: Reading...
module.auth-service.module.auth-service.data.aws_iam_policy_document.ecs-assume-role-policy: Read complete after 0s [id=320642683]
data.aws_region.current: Reading...
data.aws_region.current: Read complete after 0s [id=eu-central-1]
module.skills-systemtests.aws_iam_role.build-trigger-role[0]: Refreshing state... [id=codebuild-skills-systemtests-trigger]
module.siem-prod.aws_iam_policy.allow-access: Refreshing state... [id=arn:aws:iam::911184320458:policy/siem-ingester-prod-allow-access]
module.update-lokalise.aws_codebuild_project.code_build_project: Refreshing state... [id=update-lokalise]
module.go-test-lambda.aws_lambda_function.aws_lambda: Refreshing state... [id=terraform-go-test-lambda]
module.go-test-lambda.aws_iam_role_policy_attachment.lambda_logs: Refreshing state... [id=aws_terraform-go-test-lambda_lambda_role-20220928091348073100000001]
module.skills-systemtests.aws_codebuild_project.code_build_project: Refreshing state... [id=skills-systemtests]
module.ag5-apis-python-grpc-builder.aws_codebuild_project.code_build_project: Refreshing state... [id=ag5-apis-python-grpc-builder]
module.js-monorepo-tests.aws_iam_policy.codebuild_base_policy: Refreshing state... [id=arn:aws:iam::911184320458:policy/service-role/CodeBuildBasePolicy-js-monorepo-tests-eu-central-1]
module.ag5-apis-python-grpc-builder.aws_iam_policy.codebuild_base_policy: Refreshing state... [id=arn:aws:iam::911184320458:policy/service-role/CodeBuildBasePolicy-ag5-apis-python-grpc-builder-eu-central-1]
module.parq-entity-cloudevents-test.aws_iam_policy.allow-access: Refreshing state... [id=arn:aws:iam::911184320458:policy/parq-entity-cloudevents-test-allow-access]
module.ag5-apis-grpc-builder.aws_iam_policy.codebuild_base_policy: Refreshing state... [id=arn:aws:iam::911184320458:policy/service-role/CodeBuildBasePolicy-ag5-apis-grpc-builder-eu-central-1]
module.compliance-test.aws_iam_policy.allow-access: Refreshing state... [id=arn:aws:iam::911184320458:policy/compliance-test-allow-access]
module.skills-integration-systemtests.aws_iam_policy.codebuild_base_policy: Refreshing state... [id=arn:aws:iam::911184320458:policy/service-role/CodeBuildBasePolicy-skills-integration-systemtests-eu-central-1]
aws_iam_role.qr3-ecs-mirage-task-execution: Refreshing state... [id=qr3-ecs-mirage-task-execution]
aws_iam_role.qr3-repository-service-task-execution-role: Refreshing state... [id=grimlock-ecs-vw-serverpool-task-execution]
aws_iam_role.qr3-ecs-wololo-task-execution: Refreshing state... [id=qr3-ecs-wololo-task-execution]
aws_iam_role.qr3-ecs-scorn-task-execution: Refreshing state... [id=qr3-ecs-scorn-task-execution]
module.go-release-builder.aws_iam_policy.codebuild_base_policy: Refreshing state... [id=arn:aws:iam::911184320458:policy/service-role/CodeBuildBasePolicy-go-release-builder-eu-central-1]
module.build-smalltalk-image.aws_codebuild_project.code_build_project: Refreshing state... [id=build-smalltalk-image]
aws_iam_role.qr3-ecs-alphatrion-task-execution: Refreshing state... [id=qr3-ecs-alphatrion-task-execution]
aws_iam_role_policy_attachment.lambda_logs_siem_enricher: Refreshing state... [id=aws_siem_enricher_sns_lambda_role-20221020065920503300000001]
module.python-libs-tests.aws_iam_policy.codebuild_base_policy: Refreshing state... [id=arn:aws:iam::911184320458:policy/service-role/CodeBuildBasePolicy-python-libs-tests-eu-central-1]
module.go-release-builder.aws_codebuild_project.code_build_project: Refreshing state... [id=go-release-builder]
aws_lb_listener.qr3-private-loadbalancer: Refreshing state... [id=arn:aws:elasticloadbalancing:eu-central-1:911184320458:listener/app/qr3-private/77d1fbbf8e55d03f/93a9ac52456b118e]
aws_iam_user_policy_attachment.ci-codebuild-policy: Refreshing state... [id=ci-20220823093653913400000001]
aws_alb_listener.qr3: Refreshing state... [id=arn:aws:elasticloadbalancing:eu-central-1:911184320458:listener/app/qr3-grimlock/34eb4ba3219fcc1e/da84298308027fbb]
aws_lambda_permission.allow_invocation_from_sns_iem_enricher: Refreshing state... [id=AllowExecutionFromSNS]
aws_sns_topic_subscription.siem_sns_to_sqs_subscription_prod: Refreshing state... [id=arn:aws:sns:eu-central-1:911184320458:ag5_siem_ingester_sns:01ed73dd-6b7d-4b25-b26a-c0cd47ded7fa]
aws_iam_policy.ag5_siem_ingester_sns_publish: Refreshing state... [id=arn:aws:iam::911184320458:policy/ag5_siem_ingester_sns_publish]
aws_lambda_function.aws_siem_enricher_lambda: Refreshing state... [id=ag5-aws-siem-enricher]
data.aws_iam_policy_document.ag5_siem_ingester_sns_topic_policy: Reading...
data.aws_iam_policy_document.ag5_siem_ingester_sns_topic_policy: Read complete after 0s [id=4031315712]
aws_iam_policy.import-klm-iauditor-prod-read-config: Refreshing state... [id=arn:aws:iam::911184320458:policy/import-klm-iauditor-prod-read-config]
module.siem-test.aws_iam_policy.allow-access: Refreshing state... [id=arn:aws:iam::911184320458:policy/siem-ingester-test-allow-access]
aws_cloudwatch_event_target.guardduty_to_sns_event_rule: Refreshing state... [id=capture-guardduty-events-SendToSNS]
data.aws_iam_policy_document.aws_siem_enricher_sns_topic_policy: Reading...
data.aws_iam_policy_document.aws_siem_enricher_sns_topic_policy: Read complete after 0s [id=3500768793]
aws_db_event_subscription.rds-to-sns-subscription: Refreshing state... [id=rds-event-subscription]
aws_lambda_permission.allow_invocation_from_sns: Refreshing state... [id=AllowExecutionFromSNS]
data.aws_iam_policy_document.aws_siem_ingester_sns_topic_policy: Reading...
data.aws_iam_policy_document.aws_siem_ingester_sns_topic_policy: Read complete after 0s [id=3500768793]
aws_iam_policy.olympus-lms-import-service-read-acceptance-api-key: Refreshing state... [id=arn:aws:iam::911184320458:policy/olympus-lms-import-service-read-acceptance-api-key]
module.update-lokalise.aws_iam_policy.codebuild_base_policy: Refreshing state... [id=arn:aws:iam::911184320458:policy/service-role/CodeBuildBasePolicy-update-lokalise-eu-central-1]
aws_iam_policy.pippi-service-read-auth-key: Refreshing state... [id=arn:aws:iam::911184320458:policy/pippi-service-read-prod-auth-key]
aws_iam_user_policy_attachment.terraform-codebuild-policy: Refreshing state... [id=terraform-20220818065606016900000002]
module.python-libs-release-builder.aws_iam_policy.codebuild_base_policy: Refreshing state... [id=arn:aws:iam::911184320458:policy/service-role/CodeBuildBasePolicy-python-libs-release-builder-eu-central-1]
module.ag5-apis-grpc-builder.aws_codebuild_project.code_build_project: Refreshing state... [id=ag5-apis-grpc-builder]
aws_security_group.grimlock_db_access: Refreshing state... [id=sg-09df1dcb43b2c5f49]
aws_alb_target_group.qr3-alphatrion: Refreshing state... [id=arn:aws:elasticloadbalancing:eu-central-1:911184320458:targetgroup/ecs-qr3-alphatrion/8810d5a14d4b0bc8]
aws_alb_target_group.qr3-mirage: Refreshing state... [id=arn:aws:elasticloadbalancing:eu-central-1:911184320458:targetgroup/ecs-qr3-mirage/b3d641642d5f7810]
aws_alb_target_group.qr3-iauditor-import-service: Refreshing state... [id=arn:aws:elasticloadbalancing:eu-central-1:911184320458:targetgroup/ecs-qr3-iauditor-import-service/f68de2a9023e903e]
aws_alb_target_group.qr3-scorn: Refreshing state... [id=arn:aws:elasticloadbalancing:eu-central-1:911184320458:targetgroup/ecs-qr3-scorn/4b9af8fa4674b0b2]
aws_security_group.ecs-service-public-http: Refreshing state... [id=sg-09e3bacd69c08785b]
aws_security_group.ecs-grimlock-grpc-service: Refreshing state... [id=sg-08365980db221a938]
aws_alb_target_group.qr3-wololo: Refreshing state... [id=arn:aws:elasticloadbalancing:eu-central-1:911184320458:targetgroup/ecs-qr3-wololo/07b431e23a49243b]
module.go-html-to-pdf-lambda.aws_lambda_function.aws_lambda: Refreshing state... [id=go-html-to-pdf-lambda]
module.go-html-to-pdf-lambda.aws_iam_role_policy_attachment.lambda_logs: Refreshing state... [id=aws_go-html-to-pdf-lambda_lambda_role-20220928113412610000000001]
module.update-ag5-blog.aws_iam_policy.codebuild_base_policy: Refreshing state... [id=arn:aws:iam::911184320458:policy/service-role/CodeBuildBasePolicy-update-ag5-blog-eu-central-1]
module.skills-systemtests.aws_iam_policy.codebuild_base_policy: Refreshing state... [id=arn:aws:iam::911184320458:policy/service-role/CodeBuildBasePolicy-skills-systemtests-eu-central-1]
aws_iam_policy.parq-eventchanges-test-allow-submit-event: Refreshing state... [id=arn:aws:iam::911184320458:policy/parq-eventchanges-test-allow-submit-event]
module.build-smalltalk-image.aws_iam_policy.codebuild_base_policy: Refreshing state... [id=arn:aws:iam::911184320458:policy/service-role/CodeBuildBasePolicy-build-smalltalk-image-eu-central-1]
module.build-smalltalk-image.aws_iam_policy.codebuild_vpc_policy[0]: Refreshing state... [id=arn:aws:iam::911184320458:policy/service-role/CodeBuildVpcPolicy-build-smalltalk-image-eu-central-1]
module.parq-entity-cloudevents-prod.aws_iam_policy.allow-access: Refreshing state... [id=arn:aws:iam::911184320458:policy/parq-entity-cloudevents-prod-allow-access]
module.compliance-prod.aws_iam_policy.allow-access: Refreshing state... [id=arn:aws:iam::911184320458:policy/compliance-prod-allow-access]
aws_iam_role_policy_attachment.lambda_logs: Refreshing state... [id=aws_siem_ingester_sns_lambda_role-20220907072307217700000001]
aws_lambda_function.aws_siem_ingester_lambda: Refreshing state... [id=ag5-aws-siem-event-ingester]
module.siem-enricher.aws_iam_policy.allow-access: Refreshing state... [id=arn:aws:iam::911184320458:policy/ag5_siem_raw_sqs-allow-access]
module.python-libs-release-builder.aws_codebuild_project.code_build_project: Refreshing state... [id=python-libs-release-builder]
module.update-ag5-blog.aws_codebuild_project.code_build_project: Refreshing state... [id=update-ag5-blog]
module.skills-integration-systemtests.aws_codebuild_project.code_build_project: Refreshing state... [id=skills-integration-systemtests]
module.ag5-apis-python-grpc-builder.aws_iam_role_policy_attachment.iam_provided_policies_attachment["github-ci-private-key"]: Refreshing state... [id=codebuild-ag5-apis-python-grpc-builder-service-role-arn:aws:iam::911184320458:policy/ag5-access-github-ci-private-key]
module.update-ag5-blog.aws_iam_role_policy_attachment.iam_provided_policies_attachment["update-blog"]: Refreshing state... [id=codebuild-update-ag5-blog-service-role-arn:aws:iam::911184320458:policy/update-ag5-blog]
aws_sns_topic_subscription.siem_sns_to_sqs_subscription_test: Refreshing state... [id=arn:aws:sns:eu-central-1:911184320458:ag5_siem_ingester_sns:c2da17a2-caa8-42d0-a608-81c67a6b7324]
module.build-smalltalk-image.aws_iam_role_policy_attachment.iam_provided_policies_attachment["pull-ecr-image"]: Refreshing state... [id=codebuild-build-smalltalk-image-service-role-arn:aws:iam::911184320458:policy/ag5-pull-ecr-images]
module.go-release-builder.aws_iam_role_policy_attachment.iam_provided_policies_attachment["invoke-slack-notifier"]: Refreshing state... [id=codebuild-go-release-builder-service-role-arn:aws:iam::911184320458:policy/ag5-slack-notifier-lambda-invoke]
module.build-smalltalk-image.aws_iam_role_policy_attachment.iam_provided_policies_attachment["ag5-package-rw"]: Refreshing state... [id=codebuild-build-smalltalk-image-service-role-arn:aws:iam::911184320458:policy/ag5-packages-rw]
module.build-smalltalk-image.aws_iam_role_policy_attachment.iam_provided_policies_attachment["notify-sns"]: Refreshing state... [id=codebuild-build-smalltalk-image-service-role-arn:aws:iam::911184320458:policy/ag5-notify-sns-imagebuilder]
module.python-libs-release-builder.aws_iam_role_policy_attachment.iam_provided_policies_attachment["invoke-slack-notifier"]: Refreshing state... [id=codebuild-python-libs-release-builder-service-role-20220829130443856300000003]
module.go-release-builder.aws_iam_role_policy_attachment.iam_provided_policies_attachment["ecr-private-access"]: Refreshing state... [id=codebuild-go-release-builder-service-role-20220829130442847100000002]
module.go-release-builder.aws_iam_role_policy_attachment.iam_provided_policies_attachment["ecr-public-access"]: Refreshing state... [id=codebuild-go-release-builder-service-role-20220829130442616500000001]
module.go-release-builder.aws_iam_role_policy_attachment.iam_provided_policies_attachment["github-ci-private-key"]: Refreshing state... [id=codebuild-go-release-builder-service-role-arn:aws:iam::911184320458:policy/ag5-access-github-ci-private-key]
module.python-libs-release-builder.aws_iam_role_policy_attachment.iam_provided_policies_attachment["github-ci-private-key"]: Refreshing state... [id=codebuild-python-libs-release-builder-service-role-arn:aws:iam::911184320458:policy/ag5-access-github-ci-private-key]
module.skills-systemtests.aws_iam_role_policy_attachment.iam_provided_policies_attachment["invoke-slack-notifier"]: Refreshing state... [id=codebuild-skills-systemtests-service-role-arn:aws:iam::911184320458:policy/ag5-slack-notifier-lambda-invoke]
module.update-lokalise.aws_iam_role_policy_attachment.iam_provided_policies_attachment["invoke-slack-notifier"]: Refreshing state... [id=codebuild-update-lokalise-service-role-arn:aws:iam::911184320458:policy/ag5-slack-notifier-lambda-invoke]
module.skills-systemtests.aws_iam_role_policy_attachment.iam_provided_policies_attachment["prototype-build-artifacts"]: Refreshing state... [id=codebuild-skills-systemtests-service-role-arn:aws:iam::911184320458:policy/s3-prototype-build-artifacts-list-and-delete]
module.skills-systemtests.aws_iam_role_policy_attachment.iam_provided_policies_attachment["skills-systemtests-reports"]: Refreshing state... [id=codebuild-skills-systemtests-service-role-arn:aws:iam::911184320458:policy/ag5-skills-systemtest-parameter-store-read]
module.skills-systemtests.aws_iam_role_policy_attachment.iam_provided_policies_attachment["github-ci-private-key"]: Refreshing state... [id=codebuild-skills-systemtests-service-role-arn:aws:iam::911184320458:policy/ag5-access-github-ci-private-key]
module.skills-integration-systemtests.aws_iam_role_policy_attachment.iam_provided_policies_attachment["github-ci-private-key"]: Refreshing state... [id=codebuild-skills-integration-systemtests-service-role-arn:aws:iam::911184320458:policy/ag5-access-github-ci-private-key]
module.ag5-apis-grpc-builder.aws_iam_role_policy_attachment.iam_provided_policies_attachment["github-ci-private-key"]: Refreshing state... [id=codebuild-ag5-apis-grpc-builder-service-role-arn:aws:iam::911184320458:policy/ag5-access-github-ci-private-key]
module.update-lokalise.aws_iam_role_policy_attachment.iam_provided_policies_attachment["github-ci-private-key"]: Refreshing state... [id=codebuild-update-lokalise-service-role-arn:aws:iam::911184320458:policy/ag5-access-github-ci-private-key]
module.ag5-apis-grpc-builder.aws_iam_role_policy_attachment.iam_provided_policies_attachment["invoke-slack-notifier"]: Refreshing state... [id=codebuild-ag5-apis-grpc-builder-service-role-arn:aws:iam::911184320458:policy/ag5-slack-notifier-lambda-invoke]
module.skills-integration-systemtests.aws_iam_role_policy_attachment.iam_provided_policies_attachment["invoke-slack-notifier"]: Refreshing state... [id=codebuild-skills-integration-systemtests-service-role-arn:aws:iam::911184320458:policy/ag5-slack-notifier-lambda-invoke]
module.skills-integration-systemtests.aws_iam_role_policy_attachment.iam_provided_policies_attachment["prototype-build-artifacts"]: Refreshing state... [id=codebuild-skills-integration-systemtests-service-role-arn:aws:iam::911184320458:policy/s3-prototype-build-artifacts-list-and-delete]
module.skills-integration-systemtests.aws_iam_role_policy_attachment.iam_provided_policies_attachment["skills-integration-configuration"]: Refreshing state... [id=codebuild-skills-integration-systemtests-service-role-arn:aws:iam::911184320458:policy/ag5-skills-integration-systemtest-parameter-store-read]
module.scim_service_descriptor.aws_security_group.default: Refreshing state... [id=sg-0de030f005b269402]
module.olympus_lms_import_service_descriptor.aws_security_group.default: Refreshing state... [id=sg-02c0284c6ebbe7a2c]
module.pippi_service_descriptor.aws_security_group.default: Refreshing state... [id=sg-087ee16c2c0bc01b9]
module.auth-support-service_descriptor.aws_security_group.default: Refreshing state... [id=sg-03d92e6263b32322c]
module.auth-service_descriptor.aws_security_group.default: Refreshing state... [id=sg-0b857f253d40dcaf1]
module.sso_service_descriptor.aws_security_group.default: Refreshing state... [id=sg-09903c251370d96e5]
module.filestorage.aws_alb_target_group.filestorage: Refreshing state... [id=arn:aws:elasticloadbalancing:eu-central-1:911184320458:targetgroup/grimlock-filestorage/03cf221fb4b2d270]
module.kangaroo_service_descriptor.aws_security_group.default: Refreshing state... [id=sg-09a9b617a82dffc35]
module.parq-fetcher_service_descriptor.aws_security_group.default: Refreshing state... [id=sg-07b3e48064a8167eb]
module.js-monorepo-tests.aws_codebuild_project.code_build_project: Refreshing state... [id=arn:aws:codebuild:eu-central-1:911184320458:project/js-monorepo-tests]
module.js-monorepo-tests.aws_iam_role_policy_attachment.iam_provided_policies_attachment["ag5-slack-token-ssm-access"]: Refreshing state... [id=codebuild-js-monorepo-tests-service-role-20220922093620150100000001]
module.js-monorepo-tests.aws_iam_role_policy_attachment.base_policy_attachment: Refreshing state... [id=codebuild-js-monorepo-tests-service-role-20220922090647111500000002]
module.js-monorepo-tests.aws_iam_role_policy_attachment.iam_provided_policies_attachment["invoke-slack-notifier"]: Refreshing state... [id=codebuild-js-monorepo-tests-service-role-20220922090647105900000001]
module.js-monorepo-tests.aws_iam_role_policy_attachment.iam_provided_policies_attachment["pull-ecr-image"]: Refreshing state... [id=codebuild-js-monorepo-tests-service-role-20220922090647255200000003]
module.ag5-apis-python-grpc-builder.aws_iam_role_policy_attachment.base_policy_attachment: Refreshing state... [id=codebuild-ag5-apis-python-grpc-builder-service-role-arn:aws:iam::911184320458:policy/service-role/CodeBuildBasePolicy-ag5-apis-python-grpc-builder-eu-central-1]
module.python-libs-tests.aws_iam_role_policy_attachment.iam_provided_policies_attachment["invoke-slack-notifier"]: Refreshing state... [id=codebuild-python-libs-tests-service-role-arn:aws:iam::911184320458:policy/ag5-slack-notifier-lambda-invoke]
module.python-libs-tests.aws_iam_role_policy_attachment.iam_provided_policies_attachment["pull-ecr-image"]: Refreshing state... [id=codebuild-python-libs-tests-service-role-arn:aws:iam::911184320458:policy/ag5-pull-ecr-images]
module.python-libs-tests.aws_codebuild_project.code_build_project: Refreshing state... [id=python-libs-tests]
aws_sns_topic_subscription.siem_sns_to_sqs_subscription: Refreshing state... [id=arn:aws:sns:eu-central-1:911184320458:ag5_siem_raw_sns:48006cd4-24c8-458c-9bef-f8858d88200a]
module.ag5-apis-grpc-builder.aws_iam_role_policy_attachment.base_policy_attachment: Refreshing state... [id=codebuild-ag5-apis-grpc-builder-service-role-arn:aws:iam::911184320458:policy/service-role/CodeBuildBasePolicy-ag5-apis-grpc-builder-eu-central-1]
aws_iam_role_policy_attachment.aws_siem_ingester_sqs_policy_attachment: Refreshing state... [id=aws_siem_ingester_sns_lambda_role-20221006125058059000000001]
aws_iam_role_policy_attachment.aws_siem_enricher_sqs_policy_attachment: Refreshing state... [id=aws_siem_enricher_sns_lambda_role-20221020065920510100000002]
module.update-lokalise.aws_codebuild_webhook.webhook[0]: Refreshing state... [id=update-lokalise]
module.skills-integration-systemtests.aws_iam_role_policy_attachment.base_policy_attachment: Refreshing state... [id=codebuild-skills-integration-systemtests-service-role-arn:aws:iam::911184320458:policy/service-role/CodeBuildBasePolicy-skills-integration-systemtests-eu-central-1]
module.skills-systemtests.aws_iam_policy.build_trigger_policy[0]: Refreshing state... [id=arn:aws:iam::911184320458:policy/service-role/CodeBuildTrigger-skills-systemtests-eu-central-1]
module.skills-systemtests.aws_codebuild_webhook.webhook[0]: Refreshing state... [id=skills-systemtests]
module.skills-systemtests.aws_cloudwatch_event_target.trigger_event_target["run-daily-skills-systemtests"]: Refreshing state... [id=run-daily-skills-systemtests-terraform-20220829134325207300000003]
module.go-release-builder.aws_iam_role_policy_attachment.base_policy_attachment: Refreshing state... [id=codebuild-go-release-builder-service-role-arn:aws:iam::911184320458:policy/service-role/CodeBuildBasePolicy-go-release-builder-eu-central-1]
module.python-libs-tests.aws_iam_role_policy_attachment.base_policy_attachment: Refreshing state... [id=codebuild-python-libs-tests-service-role-arn:aws:iam::911184320458:policy/service-role/CodeBuildBasePolicy-python-libs-tests-eu-central-1]
aws_sns_topic_policy.ag5_siem_ingester_sns_policy: Refreshing state... [id=arn:aws:sns:eu-central-1:911184320458:ag5_siem_ingester_sns]
aws_ecs_task_definition.qr3-wololo: Refreshing state... [id=qr3-wololo]
aws_sns_topic_policy.aws_siem_enricher_sns_policy: Refreshing state... [id=arn:aws:sns:eu-central-1:911184320458:ag5_siem_raw_sns]
aws_ecs_task_definition.qr3-mirage: Refreshing state... [id=qr3-mirage]
aws_sns_topic_policy.aws_siem_ingester_sns_policy: Refreshing state... [id=arn:aws:sns:eu-central-1:911184320458:aws_siem_ingester_sns]
aws_ecs_task_definition.qr3-scorn: Refreshing state... [id=qr3-scorn]
aws_iam_role.qr3-ecs-import-klm-iauditor-execution-role: Refreshing state... [id=qr3-ecs-import-klm-iauditor-execution-role]
aws_ecs_task_definition.qr3-alphatrion: Refreshing state... [id=qr3-alphatrion]
module.python-libs-release-builder.aws_iam_role_policy_attachment.base_policy_attachment: Refreshing state... [id=codebuild-python-libs-release-builder-service-role-arn:aws:iam::911184320458:policy/service-role/CodeBuildBasePolicy-python-libs-release-builder-eu-central-1]
module.update-lokalise.aws_iam_role_policy_attachment.base_policy_attachment: Refreshing state... [id=codebuild-update-lokalise-service-role-arn:aws:iam::911184320458:policy/service-role/CodeBuildBasePolicy-update-lokalise-eu-central-1]
module.ag5-apis-grpc-builder.aws_codebuild_webhook.webhook[0]: Refreshing state... [id=ag5-apis-grpc-builder]
aws_sns_topic_subscription.aws_siem_enricher_subscription: Refreshing state... [id=arn:aws:sns:eu-central-1:911184320458:ag5_siem_raw_sns:9f12e6f9-77c0-424a-a75e-a21b803a373c]
aws_s3_bucket_public_access_block.qr3-terraform-state: Refreshing state... [id=qr3-terraform-state]
aws_s3_bucket_versioning.qr3-terraform-state: Refreshing state... [id=qr3-terraform-state]
aws_s3_bucket_server_side_encryption_configuration.qr3-terraform-state: Refreshing state... [id=qr3-terraform-state]
aws_lb_listener_rule.qr3-alphatrion: Refreshing state... [id=arn:aws:elasticloadbalancing:eu-central-1:911184320458:listener-rule/app/qr3-private/77d1fbbf8e55d03f/93a9ac52456b118e/2390eb17f421afbc]
aws_lb_listener_rule.qr3-mirage: Refreshing state... [id=arn:aws:elasticloadbalancing:eu-central-1:911184320458:listener-rule/app/qr3-private/77d1fbbf8e55d03f/93a9ac52456b118e/c690a8d76acdc4e0]
aws_lb_listener_rule.import-klm-iauditor: Refreshing state... [id=arn:aws:elasticloadbalancing:eu-central-1:911184320458:listener-rule/app/qr3-grimlock/34eb4ba3219fcc1e/da84298308027fbb/d9beacbf7b4633ba]
module.update-ag5-blog.aws_iam_role_policy_attachment.base_policy_attachment: Refreshing state... [id=codebuild-update-ag5-blog-service-role-arn:aws:iam::911184320458:policy/service-role/CodeBuildBasePolicy-update-ag5-blog-eu-central-1]
module.skills-systemtests.aws_iam_role_policy_attachment.base_policy_attachment: Refreshing state... [id=codebuild-skills-systemtests-service-role-arn:aws:iam::911184320458:policy/service-role/CodeBuildBasePolicy-skills-systemtests-eu-central-1]
aws_iam_role.qr3-repository-service-task-role: Refreshing state... [id=grimlock-ecs-vw-service]
module.build-smalltalk-image.aws_iam_role_policy_attachment.base_policy_attachment: Refreshing state... [id=codebuild-build-smalltalk-image-service-role-arn:aws:iam::911184320458:policy/service-role/CodeBuildBasePolicy-build-smalltalk-image-eu-central-1]
aws_lb_listener_rule.qr3-scorn: Refreshing state... [id=arn:aws:elasticloadbalancing:eu-central-1:911184320458:listener-rule/app/qr3-private/77d1fbbf8e55d03f/93a9ac52456b118e/16f6ab85cb7c9e62]
module.build-smalltalk-image.aws_iam_role_policy_attachment.vpc_policy_attachment[0]: Refreshing state... [id=codebuild-build-smalltalk-image-service-role-arn:aws:iam::911184320458:policy/service-role/CodeBuildVpcPolicy-build-smalltalk-image-eu-central-1]
data.aws_iam_policy_document.ag5_siem_ingester_sqs_queue_test_policy: Reading...
data.aws_iam_policy_document.ag5_siem_enricher_sqs_queue_prod_policy: Reading...
data.aws_iam_policy_document.ag5_siem_ingester_sqs_queue_test_policy: Read complete after 1s [id=173733192]
data.aws_iam_policy_document.ag5_siem_enricher_sqs_queue_prod_policy: Read complete after 0s [id=2424286475]
data.aws_iam_policy_document.ag5_siem_ingester_sqs_queue_prod_policy: Reading...
module.python-libs-release-builder.aws_codebuild_webhook.webhook[0]: Refreshing state... [id=python-libs-release-builder]
data.aws_iam_policy_document.ag5_siem_ingester_sqs_queue_prod_policy: Read complete after 0s [id=2424286475]
module.skills-integration-systemtests.aws_iam_policy.build_trigger_policy[0]: Refreshing state... [id=arn:aws:iam::911184320458:policy/service-role/CodeBuildTrigger-skills-integration-systemtests-eu-central-1]
module.skills-integration-systemtests.aws_codebuild_webhook.webhook[0]: Refreshing state... [id=skills-integration-systemtests]
module.skills-integration-systemtests.aws_cloudwatch_event_target.trigger_event_target["run-daily-skills-integration-systemtests"]: Refreshing state... [id=run-daily-skills-integration-systemtests-terraform-20220829134325196200000002]
module.update-ag5-blog.aws_iam_policy.build_trigger_policy[0]: Refreshing state... [id=arn:aws:iam::911184320458:policy/service-role/CodeBuildTrigger-update-ag5-blog-eu-central-1]
aws_lb_listener_rule.qr3-wololo: Refreshing state... [id=arn:aws:elasticloadbalancing:eu-central-1:911184320458:listener-rule/app/qr3-private/77d1fbbf8e55d03f/93a9ac52456b118e/dbd3efcc63847fc3]
module.update-ag5-blog.aws_cloudwatch_event_target.trigger_event_target["every-two-hours-between-work-hours-day"]: Refreshing state... [id=every-two-hours-between-work-hours-day-terraform-20220829134325194400000001]
module.update-ag5-blog.aws_codebuild_webhook.webhook[0]: Refreshing state... [id=update-ag5-blog]
aws_sns_topic_subscription.aws_siem_ingester_subscription: Refreshing state... [id=arn:aws:sns:eu-central-1:911184320458:aws_siem_ingester_sns:02816006-e1fe-4dc6-9a56-c1d82eff2a96]
module.scim_service_descriptor.aws_security_group_rule.load-balancer-in[0]: Refreshing state... [id=sgrule-37889783]
module.scim_service_descriptor.aws_security_group_rule.internet-access: Refreshing state... [id=sgrule-412620688]
module.olympus_lms_import_service_descriptor.aws_security_group_rule.load-balancer-in[0]: Refreshing state... [id=sgrule-1996257380]
module.olympus_lms_import_service_descriptor.aws_security_group_rule.internet-access: Refreshing state... [id=sgrule-2411604000]
module.pippi_service_descriptor.aws_security_group_rule.internet-access: Refreshing state... [id=sgrule-3796423086]
module.auth-support-service_descriptor.aws_security_group_rule.load-balancer-in[0]: Refreshing state... [id=sgrule-1975556802]
module.auth-support-service_descriptor.aws_security_group_rule.internet-access: Refreshing state... [id=sgrule-1612161460]
module.js-monorepo-tests.aws_codebuild_webhook.webhook[0]: Refreshing state... [id=js-monorepo-tests]
module.auth-service_descriptor.aws_security_group_rule.load-balancer-in[0]: Refreshing state... [id=sgrule-977453633]
module.auth-service_descriptor.aws_security_group_rule.internet-access: Refreshing state... [id=sgrule-3806730031]
module.sso_service_descriptor.aws_security_group_rule.load-balancer-in[0]: Refreshing state... [id=sgrule-31943449]
module.sso_service_descriptor.aws_security_group_rule.internet-access: Refreshing state... [id=sgrule-918002038]
module.kangaroo_service_descriptor.aws_security_group_rule.internet-access: Refreshing state... [id=sgrule-1716091736]
module.python-libs-tests.aws_codebuild_webhook.webhook[0]: Refreshing state... [id=python-libs-tests]
module.skills-systemtests.aws_iam_role_policy_attachment.build_trigger_policy_attachment[0]: Refreshing state... [id=codebuild-skills-systemtests-trigger-20220829134645334500000002]
module.parq-fetcher_service_descriptor.aws_security_group_rule.internet-access: Refreshing state... [id=sgrule-3333114327]
module.filestorage.aws_iam_role.task-role: Refreshing state... [id=grimlock-ecs-filestorage-service]
aws_ecs_service.qr3-wololo: Refreshing state... [id=arn:aws:ecs:eu-central-1:911184320458:service/QR3GrimlockCluster/qr3-wololo]
aws_ecs_service.qr3-mirage: Refreshing state... [id=arn:aws:ecs:eu-central-1:911184320458:service/QR3GrimlockCluster/qr3-mirage]
aws_sqs_queue_policy.ag5_siem_sns_ingester_test_allow_submit: Refreshing state... [id=https://sqs.eu-central-1.amazonaws.com/911184320458/siem-ingester-test]
aws_ecs_service.qr3-scorn: Refreshing state... [id=arn:aws:ecs:eu-central-1:911184320458:service/QR3GrimlockCluster/qr3-scorn]
aws_sqs_queue_policy.ag5_siem_sns_enricher_prod_allow_submit: Refreshing state... [id=https://sqs.eu-central-1.amazonaws.com/911184320458/ag5_siem_raw_sqs]
aws_sqs_queue_policy.ag5_siem_sns_ingester_prod_allow_submit: Refreshing state... [id=https://sqs.eu-central-1.amazonaws.com/911184320458/siem-ingester-prod]
module.skills-integration-systemtests.aws_iam_role_policy_attachment.build_trigger_policy_attachment[0]: Refreshing state... [id=codebuild-skills-integration-systemtests-trigger-20220829134645335500000003]
aws_ecs_service.qr3-alphatrion: Refreshing state... [id=arn:aws:ecs:eu-central-1:911184320458:service/QR3GrimlockCluster/qr3-alphatrion]
module.update-ag5-blog.aws_iam_role_policy_attachment.build_trigger_policy_attachment[0]: Refreshing state... [id=codebuild-update-ag5-blog-trigger-20220829134645273900000001]
module.filestorage.aws_security_group.default: Refreshing state... [id=sg-04604c2482e4015fd]
module.filestorage.aws_ecs_task_definition.default: Refreshing state... [id=grimlock-filestorage-clamav]
module.filestorage.aws_ecs_service.filestorage: Refreshing state... [id=arn:aws:ecs:eu-central-1:911184320458:service/QR3GrimlockCluster/filestorage2]
module.prod_pippi-service_courageous-parrot.aws_sqs_queue.failure: Refreshing state... [id=https://sqs.eu-central-1.amazonaws.com/911184320458/pippi_prod_failures_courageous-parrot]
module.prod_pippi-service_courageous-parrot.aws_s3_bucket.failure: Refreshing state... [id=pippi-prod-failures-queue-courageous-parrot]
module.acceptance_olympus-lms-import_faithful-alligator.module.olympus-lms-import-service.aws_alb_target_group.default[0]: Refreshing state... [id=arn:aws:elasticloadbalancing:eu-central-1:911184320458:targetgroup/ecs-ec1-acceptance-faithfu-84b6f/4ac34d0b3a461dcf]
module.prod_pippi-service_courageous-parrot.aws_s3_bucket.inbound: Refreshing state... [id=pippi-prod-inbound-queue-courageous-parrot]
module.prod_pippi-service_courageous-parrot.aws_sqs_queue.inbound: Refreshing state... [id=https://sqs.eu-central-1.amazonaws.com/911184320458/pippi_prod_inbound_courageous-parrot]
module.acceptance_olympus-lms-import_faithful-alligator.module.olympus-lms-import-service.aws_iam_role.task[0]: Refreshing state... [id=ecs-ec1-acceptance-faithful-alligator-olympus-lms-import-s-a5337]
module.acceptance_olympus-lms-import_faithful-alligator.module.olympus-lms-import-service.aws_iam_role.task-execution: Refreshing state... [id=ecs-ec1-acceptance-faithful-alligator-olympus-lms-import-s-45ee3]
module.acceptance_olympus-lms-import_faithful-alligator.module.olympus-lms-import-service.aws_lb_listener_rule.default[0]: Refreshing state... [id=arn:aws:elasticloadbalancing:eu-central-1:911184320458:listener-rule/app/qr3-grimlock/34eb4ba3219fcc1e/da84298308027fbb/7bebd5729f67061a]
module.acceptance_olympus-lms-import_faithful-alligator.module.olympus-lms-import-service.aws_ecs_task_definition.default: Refreshing state... [id=olympus-lms-import-service_v0-1-4_faithful-alligator]
module.prod_scim_fearless-sturgeon.module.scim-service.aws_alb_target_group.default[0]: Refreshing state... [id=arn:aws:elasticloadbalancing:eu-central-1:911184320458:targetgroup/ecs-ec1-prod-fearless-stur-1c0ed/da5a0d6d0e22d46a]
module.prod_scim_berserk-panini.module.scim-service.aws_alb_target_group.default[0]: Refreshing state... [id=arn:aws:elasticloadbalancing:eu-central-1:911184320458:targetgroup/ecs-ec1-prod-berserk-panin-ced27/7c73e826f5da5f8a]
module.dev_auth-support-service.module.auth-support-service.aws_alb_target_group.default[0]: Refreshing state... [id=arn:aws:elasticloadbalancing:eu-central-1:911184320458:targetgroup/ecs-global-super-parakeet-84985e/3a3fc1d6426ca5bd]
module.prod_scim_fearless-sturgeon.module.scim-service.aws_iam_role.task-execution: Refreshing state... [id=ecs-ec1-prod-fearless-sturgeon-qr3-scim-service-task-execution]
module.dev_auth-support-service.module.auth-support-service.aws_iam_role.task-execution: Refreshing state... [id=ecs-global-super-parakeet-auth-support-service-task-execution]
module.dev_auth-support-service.module.auth-support-service.aws_iam_role.task[0]: Refreshing state... [id=ecs-global-super-parakeet-auth-support-service-task]
module.acceptance_olympus-lms-import_faithful-alligator.module.olympus-lms-import-service.aws_ecs_service.default: Refreshing state... [id=arn:aws:ecs:eu-central-1:911184320458:service/QR3GrimlockCluster/olympus-lms-import-service_acceptance_faithful-alligator]
module.prod_scim_berserk-panini.module.scim-service.aws_iam_role.task-execution: Refreshing state... [id=ecs-ec1-prod-berserk-panini-qr3-scim-service-task-execution]
module.prod_sso_shimmering-duck.module.sso-service.aws_alb_target_group.default[0]: Refreshing state... [id=arn:aws:elasticloadbalancing:eu-central-1:911184320458:targetgroup/ecs-ec1-global-shimmering-fbd675/44e8ef6e1f901d3e]
module.prod_pippi-service_courageous-parrot.module.pippi-service.aws_iam_role.task-execution: Refreshing state... [id=ecs-prod-courageous-parrot-pippi-import-service-task-execution]
module.kangaroo_test.module.kangaroo-service.aws_iam_role.task[0]: Refreshing state... [id=ecs-ec1-dev-go-kangaroo-service-go-kangaroo-service-task]
module.kangaroo_test.module.kangaroo-service.aws_iam_role.task-execution: Refreshing state... [id=ecs-ec1-dev-go-kangaroo-service-go-kangaroo-service-task-e-89a08]
module.prod_sso_shimmering-duck.module.sso-service.aws_iam_role.task-execution: Refreshing state... [id=ecs-ec1-global-shimmering-duck-qr3-sso-server-task-execution]
module.prod_sso_shimmering-duck.module.sso-service.aws_iam_role.task[0]: Refreshing state... [id=ecs-ec1-global-shimmering-duck-qr3-sso-server-task]
module.auth-service.module.auth-service.aws_alb_target_group.default[0]: Refreshing state... [id=arn:aws:elasticloadbalancing:eu-central-1:911184320458:targetgroup/ecs-global-stellar-firefly-d6175/20b38821c9141bdf]
module.kangaroo_prod.module.kangaroo-service.aws_iam_role.task[0]: Refreshing state... [id=ecs-ec1-prod-go-kangaroo-service-go-kangaroo-service-task]
module.kangaroo_prod.module.kangaroo-service.aws_iam_role.task-execution: Refreshing state... [id=ecs-ec1-prod-go-kangaroo-service-go-kangaroo-service-task-5e6c92]
module.auth-service.module.auth-service.aws_iam_role.task[0]: Refreshing state... [id=ecs-global-stellar-firefly-auth-service-task]
module.auth-service.module.auth-service.aws_iam_role.task-execution: Refreshing state... [id=ecs-global-stellar-firefly-auth-service-task-execution]
module.parq-fetcher_test.module.parq-fetcher-service.aws_iam_role.task-execution: Refreshing state... [id=ecs-ec1-dev-go-parq-fetcher-go-parq-fetcher-task-execution]
module.parq-fetcher_test.module.parq-fetcher-service.aws_iam_role.task[0]: Refreshing state... [id=ecs-ec1-dev-go-parq-fetcher-go-parq-fetcher-task]
module.prod_scim_fearless-sturgeon.module.scim-service.aws_lb_listener_rule.default[0]: Refreshing state... [id=arn:aws:elasticloadbalancing:eu-central-1:911184320458:listener-rule/app/qr3-grimlock/34eb4ba3219fcc1e/da84298308027fbb/047d7396d5579c76]
module.prod_scim_berserk-panini.module.scim-service.aws_lb_listener_rule.default[0]: Refreshing state... [id=arn:aws:elasticloadbalancing:eu-central-1:911184320458:listener-rule/app/qr3-grimlock/34eb4ba3219fcc1e/da84298308027fbb/f6e0652ac084989e]
module.dev_auth-support-service.module.auth-support-service.aws_lb_listener_rule.default[0]: Refreshing state... [id=arn:aws:elasticloadbalancing:eu-central-1:911184320458:listener-rule/app/qr3-grimlock/34eb4ba3219fcc1e/da84298308027fbb/03dad7cd76a51f84]
module.prod_scim_fearless-sturgeon.module.scim-service.aws_ecs_task_definition.default: Refreshing state... [id=qr3-scim-service_v3-0-5_fearless-sturgeon]
module.dev_auth-support-service.module.auth-support-service.aws_ecs_task_definition.default: Refreshing state... [id=auth-support-service_v1-10-33_super-parakeet]
module.prod_scim_berserk-panini.module.scim-service.aws_ecs_task_definition.default: Refreshing state... [id=qr3-scim-service_v3-0-5_berserk-panini]
module.prod_sso_shimmering-duck.module.sso-service.aws_lb_listener_rule.default[0]: Refreshing state... [id=arn:aws:elasticloadbalancing:eu-central-1:911184320458:listener-rule/app/qr3-grimlock/34eb4ba3219fcc1e/da84298308027fbb/ed8eddf98ffa1050]
module.prod_pippi-service_courageous-parrot.aws_iam_policy.allow-submit-record: Refreshing state... [id=arn:aws:iam::911184320458:policy/ecs-prod-courageous-parrot-pippi-import-service_record-producer]
module.prod_pippi-service_courageous-parrot.aws_iam_policy.queue-access-policy: Refreshing state... [id=arn:aws:iam::911184320458:policy/ecs-prod-courageous-parrot-pippi-import-service_queue-access]
module.prod_pippi-service_courageous-parrot.aws_s3_bucket_public_access_block.pippi-inbound-prod: Refreshing state... [id=pippi-prod-inbound-queue-courageous-parrot]
module.prod_pippi-service_courageous-parrot.aws_s3_bucket_public_access_block.pippi-failure-prod: Refreshing state... [id=pippi-prod-failures-queue-courageous-parrot]
module.kangaroo_test.module.kangaroo-service.aws_ecs_task_definition.default: Refreshing state... [id=go-kangaroo-service_v0-2-7_go-kangaroo-service]
module.auth-service.module.auth-service.aws_lb_listener_rule.default[0]: Refreshing state... [id=arn:aws:elasticloadbalancing:eu-central-1:911184320458:listener-rule/app/qr3-grimlock/34eb4ba3219fcc1e/da84298308027fbb/3c147f724bc18746]
module.prod_sso_shimmering-duck.module.sso-service.aws_ecs_task_definition.default: Refreshing state... [id=qr3-sso-server_v0-1-16_shimmering-duck]
module.kangaroo_prod.module.kangaroo-service.aws_ecs_task_definition.default: Refreshing state... [id=go-kangaroo-service_v0-2-7_go-kangaroo-service]
module.prod_scim_fearless-sturgeon.module.scim-service.aws_ecs_service.default: Refreshing state... [id=arn:aws:ecs:eu-central-1:911184320458:service/QR3GrimlockCluster/qr3-scim-service_prod_fearless-sturgeon]
module.dev_auth-support-service.module.auth-support-service.aws_ecs_service.default: Refreshing state... [id=arn:aws:ecs:eu-central-1:911184320458:service/QR3GrimlockCluster/auth-support-service_global_super-parakeet]
module.parq-fetcher_test.module.parq-fetcher-service.aws_ecs_task_definition.default: Refreshing state... [id=go-parq-fetcher_v0-0-1_go-parq-fetcher]
module.prod_scim_berserk-panini.module.scim-service.aws_ecs_service.default: Refreshing state... [id=arn:aws:ecs:eu-central-1:911184320458:service/QR3GrimlockCluster/qr3-scim-service_prod_berserk-panini]
module.auth-service.module.auth-service.aws_ecs_task_definition.default: Refreshing state... [id=auth-service_B254-Auth1-8_stellar-firefly]
aws_iam_role.qr3-ecs-import-klm-iauditor-task-role: Refreshing state... [id=qr3-ecs-import-klm-iauditor-task-role]
module.kangaroo_test.module.kangaroo-service.aws_ecs_service.default: Refreshing state... [id=arn:aws:ecs:eu-central-1:911184320458:service/QR3GrimlockCluster/go-kangaroo-service_dev_go-kangaroo-service]
module.prod_sso_shimmering-duck.module.sso-service.aws_ecs_service.default: Refreshing state... [id=arn:aws:ecs:eu-central-1:911184320458:service/QR3GrimlockCluster/qr3-sso-server_global_shimmering-duck]
module.prod_pippi-service_courageous-parrot.module.pippi-service.aws_iam_role.task[0]: Refreshing state... [id=ecs-prod-courageous-parrot-pippi-import-service-task]
module.kangaroo_prod.module.kangaroo-service.aws_ecs_service.default: Refreshing state... [id=arn:aws:ecs:eu-central-1:911184320458:service/QR3GrimlockCluster/go-kangaroo-service_prod_go-kangaroo-service]
module.parq-fetcher_test.module.parq-fetcher-service.aws_ecs_service.default: Refreshing state... [id=arn:aws:ecs:eu-central-1:911184320458:service/QR3GrimlockCluster/go-parq-fetcher_dev_go-parq-fetcher]
module.auth-service.module.auth-service.aws_ecs_service.default: Refreshing state... [id=arn:aws:ecs:eu-central-1:911184320458:service/QR3GrimlockCluster/auth-service_global_stellar-firefly]
aws_ecs_task_definition.import-klm-iauditor: Refreshing state... [id=import-klm-iauditor]
module.prod_pippi-service_courageous-parrot.module.pippi-service.aws_ecs_task_definition.default: Refreshing state... [id=pippi-import-service_v0-0-19_courageous-parrot]
aws_ecs_service.import-klm-iauditor: Refreshing state... [id=arn:aws:ecs:eu-central-1:911184320458:service/QR3GrimlockCluster/import-klm-iauditor]
module.prod_pippi-service_courageous-parrot.module.pippi-service.aws_ecs_service.default: Refreshing state... [id=arn:aws:ecs:eu-central-1:911184320458:service/QR3GrimlockCluster/pippi-import-service_prod_courageous-parrot]

Terraform used the selected providers to generate the following execution
plan. Resource actions are indicated with the following symbols:
  + create

Terraform will perform the following actions:

  # module.hemingway_service_descriptor.aws_ecr_repository.default will be created
  + resource "aws_ecr_repository" "default" ***
      + arn                  = (known after apply)
      + id                   = (known after apply)
      + image_tag_mutability = "MUTABLE"
      + name                 = "hemingway"
      + registry_id          = (known after apply)
      + repository_url       = (known after apply)
      + tags_all             = (known after apply)

      + image_scanning_configuration ***
          + scan_on_push = true
        ***
    ***

  # module.hemingway_service_descriptor.aws_security_group.default will be created
  + resource "aws_security_group" "default" ***
      + arn                    = (known after apply)
      + description            = "Default security group of hemingway ECS service"
      + egress                 = (known after apply)
      + id                     = (known after apply)
      + ingress                = (known after apply)
      + name                   = "ecs-hemingway"
      + name_prefix            = (known after apply)
      + owner_id               = (known after apply)
      + revoke_rules_on_delete = false
      + tags_all               = (known after apply)
      + vpc_id                 = "vpc-4f0be826"
    ***

  # module.hemingway_service_descriptor.aws_security_group_rule.grpc-load-balancer-in[0] will be created
  + resource "aws_security_group_rule" "grpc-load-balancer-in" ***
      + description              = "Allow the GRPC load balancer"
      + from_port                = 9090
      + id                       = (known after apply)
      + protocol                 = "tcp"
      + security_group_id        = (known after apply)
      + self                     = false
      + source_security_group_id = "sg-0309b4b9d327c119b"
      + to_port                  = 9090
      + type                     = "ingress"
    ***

  # module.hemingway_service_descriptor.aws_security_group_rule.internet-access will be created
  + resource "aws_security_group_rule" "internet-access" ***
      + cidr_blocks              = [
          + "0.0.0.0/0",
        ]
      + description              = "Allow all outbound traffic, to access AWS services"
      + from_port                = 0
      + id                       = (known after apply)
      + ipv6_cidr_blocks         = [
          + "::/0",
        ]
      + protocol                 = "-1"
      + security_group_id        = (known after apply)
      + self                     = false
      + source_security_group_id = (known after apply)
      + to_port                  = 0
      + type                     = "egress"
    ***

  # module.prod_hemingway_brave-mclaren.module.hemingway-service.aws_alb_target_group.grpc[0] will be created
  + resource "aws_alb_target_group" "grpc" ***
      + arn                                = (known after apply)
      + arn_suffix                         = (known after apply)
      + connection_termination             = false
      + deregistration_delay               = "300"
      + id                                 = (known after apply)
      + lambda_multi_value_headers_enabled = false
      + load_balancing_algorithm_type      = (known after apply)
      + name                               = "ecs-ec1-prod-brave-mclaren-c4b67"
      + port                               = 9090
      + preserve_client_ip                 = (known after apply)
      + protocol                           = "HTTP"
      + protocol_version                   = "GRPC"
      + proxy_protocol_v2                  = false
      + slow_start                         = 0
      + tags_all                           = (known after apply)
      + target_type                        = "ip"
      + vpc_id                             = "vpc-4f0be826"

      + health_check ***
          + enabled             = true
          + healthy_threshold   = 5
          + interval            = 30
          + matcher             = (known after apply)
          + path                = "/healthcheck"
          + port                = "traffic-port"
          + protocol            = "HTTP"
          + timeout             = (known after apply)
          + unhealthy_threshold = 2
        ***

      + stickiness ***
          + cookie_duration = (known after apply)
          + cookie_name     = (known after apply)
          + enabled         = (known after apply)
          + type            = (known after apply)
        ***
    ***

  # module.prod_hemingway_brave-mclaren.module.hemingway-service.aws_ecs_service.default will be created
  + resource "aws_ecs_service" "default" ***
      + cluster                            = "arn:aws:ecs:eu-central-1:911184320458:cluster/QR3GrimlockCluster"
      + deployment_maximum_percent         = 200
      + deployment_minimum_healthy_percent = 100
      + desired_count                      = 1
      + enable_ecs_managed_tags            = false
      + enable_execute_command             = false
      + iam_role                           = (known after apply)
      + id                                 = (known after apply)
      + launch_type                        = "FARGATE"
      + name                               = "hemingway_prod_brave-mclaren"
      + platform_version                   = (known after apply)
      + scheduling_strategy                = "REPLICA"
      + tags                               = ***
          + "Attributes"  = "hemingway"
          + "Environment" = "ec1"
          + "ManagedBy"   = "Terraform"
          + "Name"        = "ecs-ec1-prod-brave-mclaren-hemingway"
          + "Namespace"   = "ecs"
          + "Stage"       = "prod"
        ***
      + tags_all                           = ***
          + "Attributes"  = "hemingway"
          + "Environment" = "ec1"
          + "ManagedBy"   = "Terraform"
          + "Name"        = "ecs-ec1-prod-brave-mclaren-hemingway"
          + "Namespace"   = "ecs"
          + "Stage"       = "prod"
        ***
      + task_definition                    = (known after apply)
      + wait_for_steady_state              = false

      + deployment_circuit_breaker ***
          + enable   = true
          + rollback = true
        ***

      + load_balancer ***
          + container_name   = "service"
          + container_port   = 9090
          + target_group_arn = (known after apply)
        ***

      + network_configuration ***
          + assign_public_ip = false
          + security_groups  = (known after apply)
          + subnets          = [
              + "subnet-012ece5e32ccbce4b",
              + "subnet-06b15fa22d576b6c4",
              + "subnet-0ebd679a894768f26",
            ]
        ***
    ***

  # module.prod_hemingway_brave-mclaren.module.hemingway-service.aws_ecs_task_definition.default will be created
  + resource "aws_ecs_task_definition" "default" ***
      + arn                      = (known after apply)
      + container_definitions    = (known after apply)
      + cpu                      = "256"
      + execution_role_arn       = (known after apply)
      + family                   = "hemingway_v0-2-7_brave-mclaren"
      + id                       = (known after apply)
      + memory                   = "512"
      + network_mode             = "awsvpc"
      + requires_compatibilities = [
          + "FARGATE",
        ]
      + revision                 = (known after apply)
      + skip_destroy             = false
      + tags                     = ***
          + "Attributes"  = "hemingway"
          + "Environment" = "ec1"
          + "ManagedBy"   = "Terraform"
          + "Name"        = "ecs-ec1-prod-brave-mclaren-hemingway"
          + "Namespace"   = "ecs"
          + "Stage"       = "prod"
        ***
      + tags_all                 = ***
          + "Attributes"  = "hemingway"
          + "Environment" = "ec1"
          + "ManagedBy"   = "Terraform"
          + "Name"        = "ecs-ec1-prod-brave-mclaren-hemingway"
          + "Namespace"   = "ecs"
          + "Stage"       = "prod"
        ***
    ***

  # module.prod_hemingway_brave-mclaren.module.hemingway-service.aws_iam_role.task-execution will be created
  + resource "aws_iam_role" "task-execution" ***
      + arn                   = (known after apply)
      + assume_role_policy    = jsonencode(
            ***
              + Statement = [
                  + ***
                      + Action    = "sts:AssumeRole"
                      + Effect    = "Allow"
                      + Principal = ***
                          + Service = "ecs-tasks.amazonaws.com"
                        ***
                      + Sid       = ""
                    ***,
                ]
              + Version   = "2012-10-17"
            ***
        )
      + create_date           = (known after apply)
      + force_detach_policies = false
      + id                    = (known after apply)
      + managed_policy_arns   = [
          + "arn:aws:iam::aws:policy/CloudWatchLogsFullAccess",
          + "arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy",
        ]
      + max_session_duration  = 3600
      + name                  = "ecs-ec1-prod-brave-mclaren-hemingway-task-execution"
      + name_prefix           = (known after apply)
      + path                  = "/"
      + tags                  = ***
          + "Attributes"  = "hemingway"
          + "Environment" = "ec1"
          + "ManagedBy"   = "Terraform"
          + "Name"        = "ecs-ec1-prod-brave-mclaren-hemingway"
          + "Namespace"   = "ecs"
          + "Stage"       = "prod"
        ***
      + tags_all              = ***
          + "Attributes"  = "hemingway"
          + "Environment" = "ec1"
          + "ManagedBy"   = "Terraform"
          + "Name"        = "ecs-ec1-prod-brave-mclaren-hemingway"
          + "Namespace"   = "ecs"
          + "Stage"       = "prod"
        ***
      + unique_id             = (known after apply)

      + inline_policy ***
          + name   = (known after apply)
          + policy = (known after apply)
        ***
    ***

  # module.prod_hemingway_brave-mclaren.module.hemingway-service.aws_lb_listener_rule.grpc[0] will be created
  + resource "aws_lb_listener_rule" "grpc" ***
      + arn          = (known after apply)
      + id           = (known after apply)
      + listener_arn = "arn:aws:elasticloadbalancing:eu-central-1:911184320458:loadbalancer/app/qr3-private/77d1fbbf8e55d03f"
      + priority     = 100
      + tags_all     = (known after apply)

      + action ***
          + order            = (known after apply)
          + target_group_arn = (known after apply)
          + type             = "forward"
        ***

      + condition ***

          + path_pattern ***
              + values = [
                  + "/hemingway/prod/brave-mclaren/*",
                ]
            ***
        ***
    ***

Plan: 9 to add, 0 to change, 0 to destroy.

─────────────────────────────────────────────────────────────────────────────

Note: You didn't use the -out option to save this plan, so Terraform can't
guarantee to take exactly these actions if you run "terraform apply" now.
`;

const planOutputWithLocalChanges = `C:\\Users\\Arjen\\Projects\\python-libs\\.venv\\Scripts\\python.exe C:\\Users\\Arjen\\Projects\\python-libs\\snippets\\output.py 
module.parq-entity-cloudevents-prod.aws_sqs_queue.queue: Refreshing state... [id=https://sqs.eu-central-1.amazonaws.com/911184320458/parq-entity-cloudevents-prod]
module.skills-integration-systemtests.data.aws_caller_identity.current: Reading...
module.prod_sso_lovely-squirrel.module.sso-service.data.aws_iam_policy_document.ecs-assume-role-policy: Reading...
module.parq-fetcher_test.module.parq-fetcher-service.data.aws_iam_policy_document.ecs-assume-role-policy: Reading...
module.update-ag5-blog.aws_cloudwatch_event_rule.trigger_event_rule["every-two-hours-between-work-hours-day"]: Refreshing state... [id=every-two-hours-between-work-hours-day]
module.python-libs-release-builder.data.aws_caller_identity.current: Reading...
module.prod_pippi-service_courageous-parrot.module.pippi-service.data.aws_iam_policy_document.ecs-assume-role-policy: Reading...
module.python-libs-tests.data.aws_caller_identity.current: Reading...
module.update-lokalise.data.aws_caller_identity.current: Reading...
module.siem-test.aws_sqs_queue.queue: Refreshing state... [id=https://sqs.eu-central-1.amazonaws.com/911184320458/siem-ingester-test]
module.prod_sso_lovely-squirrel.module.sso-service.data.aws_iam_policy_document.ecs-assume-role-policy: Read complete after 0s [id=320642683]
module.prod_pippi-service_courageous-parrot.module.pippi-service.data.aws_iam_policy_document.ecs-assume-role-policy: Read complete after 0s [id=320642683]
module.parq-fetcher_test.module.parq-fetcher-service.data.aws_iam_policy_document.ecs-assume-role-policy: Read complete after 0s [id=320642683]
module.build-smalltalk-image.data.aws_caller_identity.current: Reading...
module.frontend-deploy.data.aws_caller_identity.current: Reading...
module.kangaroo_prod.module.kangaroo-service.data.aws_iam_policy_document.ecs-assume-role-policy: Reading...
module.kangaroo_prod.module.kangaroo-service.data.aws_iam_policy_document.ecs-assume-role-policy: Read complete after 0s [id=320642683]
module.compliance-prod.aws_sqs_queue.queue: Refreshing state... [id=https://sqs.eu-central-1.amazonaws.com/911184320458/compliance-prod]
module.frontend-deploy.data.aws_caller_identity.current: Read complete after 1s [id=911184320458]
module.acceptance_olympus-lms-import_faithful-alligator.module.olympus-lms-import-service.data.aws_iam_policy_document.ecs-assume-role-policy: Reading...
module.acceptance_olympus-lms-import_faithful-alligator.module.olympus-lms-import-service.data.aws_iam_policy_document.ecs-assume-role-policy: Read complete after 0s [id=320642683]
aws_iam_policy.super_admin: Refreshing state... [id=arn:aws:iam::911184320458:policy/super_admin]
module.update-lokalise.data.aws_caller_identity.current: Read complete after 1s [id=911184320458]
module.python-libs-tests.data.aws_caller_identity.current: Read complete after 1s [id=911184320458]
module.python-libs-release-builder.data.aws_caller_identity.current: Read complete after 1s [id=911184320458]
module.skills-integration-systemtests.data.aws_caller_identity.current: Read complete after 1s [id=911184320458]
module.go-release-builder.data.aws_caller_identity.current: Reading...
data.aws_iam_policy.AWSConfigRulesExecutionRole: Reading...
aws_ssm_parameter.qr3-iauditor-prod-client-config: Refreshing state... [id=/qr3/service/integration/klmcargo-iauditor-import-service/prod/client-configuration]
module.build-smalltalk-image.data.aws_caller_identity.current: Read complete after 1s [id=911184320458]
data.aws_iam_policy_document.ecs-assume-role-policy: Reading...
module.prod_scim_fearless-sturgeon.module.scim-service.data.aws_iam_policy_document.ecs-assume-role-policy: Reading...
data.aws_iam_policy_document.ecs-assume-role-policy: Read complete after 0s [id=320642683]
aws_iam_policy.lambda_siem_event_ingester_logging: Refreshing state... [id=arn:aws:iam::911184320458:policy/lambda_ag5-aws-siem-event-ingester_logging]
module.prod_scim_fearless-sturgeon.module.scim-service.data.aws_iam_policy_document.ecs-assume-role-policy: Read complete after 0s [id=320642683]
aws_sns_topic.aws_siem_ingester_sns: Refreshing state... [id=arn:aws:sns:eu-central-1:911184320458:aws_siem_ingester_sns]
module.go-release-builder.data.aws_caller_identity.current: Read complete after 0s [id=911184320458]
aws_iam_policy.ag5_slack_notifier_lambda_invoke: Refreshing state... [id=arn:aws:iam::911184320458:policy/ag5-slack-notifier-lambda-invoke]
aws_iam_policy.ag5_slack_token_parameter_store_read: Refreshing state... [id=arn:aws:iam::911184320458:policy/ag5-slack-token-parameter-store-read]
aws_sqs_queue.parq-eventchanges-test: Refreshing state... [id=https://sqs.eu-central-1.amazonaws.com/911184320458/parq-eventchanges-test]
aws_cloudwatch_event_rule.guardduty_event_rule: Refreshing state... [id=capture-guardduty-events]
aws_ecr_repository.qr3-mirage: Refreshing state... [id=qr3-mirage-endpoint-service]
aws_iam_policy.sns-topic-siem-raw-allow-publish: Refreshing state... [id=arn:aws:iam::911184320458:policy/sns-topic-siem-raw-allow-publish]
aws_vpc.qr3: Refreshing state... [id=vpc-4f0be826]
aws_lb.qr3-private-loadbalancer: Refreshing state... [id=arn:aws:elasticloadbalancing:eu-central-1:911184320458:loadbalancer/app/qr3-private/77d1fbbf8e55d03f]
module.parameters_store_backup.aws_cloudwatch_event_rule.trigger_event_rule["run-daily-backups"]: Refreshing state... [id=run-daily-backups]
data.aws_region.current: Reading...
data.aws_region.current: Read complete after 0s [id=eu-central-1]
aws_s3_bucket.qr3-terraform-state: Refreshing state... [id=qr3-terraform-state]
aws_ecr_repository.qr3-wololo: Refreshing state... [id=go-wololo-service]
module.dev_holysheet_clever-austin.module.holysheet-service.data.aws_iam_policy_document.ecs-assume-role-policy: Reading...
module.dev_holysheet_clever-austin.module.holysheet-service.data.aws_iam_policy_document.ecs-assume-role-policy: Read complete after 0s [id=320642683]
aws_iam_policy.ag5-lambda-cloudwatch-log-group-access: Refreshing state... [id=arn:aws:iam::911184320458:policy/ag5-lambda-cloudwatch-log-group-access]
aws_iam_user.ci: Refreshing state... [id=ci]
aws_iam_policy.qr3-access-auth-prod-public-key: Refreshing state... [id=arn:aws:iam::911184320458:policy/qr3-access-auth-prod-public-key]
aws_iam_policy.s3_prototype_build_artifacts_list_and_delete: Refreshing state... [id=arn:aws:iam::911184320458:policy/s3-prototype-build-artifacts-list-and-delete]
module.global_auth-service_juicy-jaguar.module.auth-service.data.aws_iam_policy_document.ecs-assume-role-policy: Reading...
module.global_auth-service_juicy-jaguar.module.auth-service.data.aws_iam_policy_document.ecs-assume-role-policy: Read complete after 0s [id=320642683]
module.parq-entity-cloudevents-test.aws_sqs_queue.queue: Refreshing state... [id=https://sqs.eu-central-1.amazonaws.com/911184320458/parq-entity-cloudevents-test]
aws_ecr_repository.qr3-scorn: Refreshing state... [id=qr3-scorn-dataset-service]
module.prod_hemingway_brave-mclaren.module.hemingway-service.data.aws_iam_policy_document.ecs-assume-role-policy: Reading...
aws_iam_policy.pdf_sign_ca_cert_parameterstore_r: Refreshing state... [id=arn:aws:iam::911184320458:policy/pdf-sign-ca-cert-ssm-ro]
module.prod_hemingway_brave-mclaren.module.hemingway-service.data.aws_iam_policy_document.ecs-assume-role-policy: Read complete after 0s [id=320642683]
aws_iam_policy.qr3-access-qr3-cdn-content-s3-bucket: Refreshing state... [id=arn:aws:iam::911184320458:policy/grimlock-deploy]
aws_ecs_cluster.qr3: Refreshing state... [id=arn:aws:ecs:eu-central-1:911184320458:cluster/QR3GrimlockCluster]
module.ag5-apis-grpc-builder.data.aws_caller_identity.current: Reading...
module.skills-systemtests.data.aws_caller_identity.current: Reading...
module.ag5-apis-grpc-builder.data.aws_caller_identity.current: Read complete after 0s [id=911184320458]
aws_sqs_queue.parq-eventchanges-prod: Refreshing state... [id=https://sqs.eu-central-1.amazonaws.com/911184320458/parq-eventchanges-prod]
module.skills-systemtests.data.aws_caller_identity.current: Read complete after 0s [id=911184320458]
aws_alb.qr3: Refreshing state... [id=arn:aws:elasticloadbalancing:eu-central-1:911184320458:loadbalancer/app/qr3-grimlock/34eb4ba3219fcc1e]
module.prod_scim_berserk-panini.module.scim-service.data.aws_iam_policy_document.ecs-assume-role-policy: Reading...
module.prod_scim_berserk-panini.module.scim-service.data.aws_iam_policy_document.ecs-assume-role-policy: Read complete after 0s [id=320642683]
aws_ssm_parameter.pippi-service-courageous-parrot-auth-key: Refreshing state... [id=/qr3/service/pippi/prod/preshared-auth-key]
module.update-ag5-blog.data.aws_caller_identity.current: Reading...
aws_iam_policy.ag5_pull_ecr_images: Refreshing state... [id=arn:aws:iam::911184320458:policy/ag5-pull-ecr-images]
module.update-ag5-blog.data.aws_caller_identity.current: Read complete after 1s [id=911184320458]
module.dev_auth-support-service.module.auth-support-service.data.aws_iam_policy_document.ecs-assume-role-policy: Reading...
module.dev_auth-support-service.module.auth-support-service.data.aws_iam_policy_document.ecs-assume-role-policy: Read complete after 0s [id=320642683]
module.parameters_store_backup.data.aws_caller_identity.current: Reading...
module.skills-integration-systemtests.aws_cloudwatch_event_rule.trigger_event_rule["run-daily-skills-integration-systemtests"]: Refreshing state... [id=run-daily-skills-integration-systemtests]
module.parameters_store_backup.data.aws_caller_identity.current: Read complete after 0s [id=911184320458]
aws_iam_policy.ag5_skills_integration_systemtest_parameter_store_read: Refreshing state... [id=arn:aws:iam::911184320458:policy/ag5-skills-integration-systemtest-parameter-store-read]
aws_iam_policy.ag5_packages_rw: Refreshing state... [id=arn:aws:iam::911184320458:policy/ag5-packages-rw]
aws_iam_policy.update-ag5-blog: Refreshing state... [id=arn:aws:iam::911184320458:policy/update-ag5-blog]
aws_iam_policy.ag5_skills_systemtest_parameter_store_read: Refreshing state... [id=arn:aws:iam::911184320458:policy/ag5-skills-systemtest-parameter-store-read]
module.compliance-test.aws_sqs_queue.queue: Refreshing state... [id=https://sqs.eu-central-1.amazonaws.com/911184320458/compliance-test]
aws_iam_user.terraform: Refreshing state... [id=terraform]
aws_iam_policy.ag5-access-github-ci-private-key: Refreshing state... [id=arn:aws:iam::911184320458:policy/ag5-access-github-ci-private-key]
module.js-monorepo-tests.data.aws_caller_identity.current: Reading...
module.prod_sftp_service.data.aws_iam_policy_document.ecs-assume-role-policy: Reading...
module.prod_sftp_service.data.aws_iam_policy_document.ecs-assume-role-policy: Read complete after 0s [id=320642683]
module.kangaroo_test.module.kangaroo-service.data.aws_iam_policy_document.ecs-assume-role-policy: Reading...
module.kangaroo_test.module.kangaroo-service.data.aws_iam_policy_document.ecs-assume-role-policy: Read complete after 0s [id=320642683]
module.filestorage.aws_iam_policy.s3-rw-access: Refreshing state... [id=arn:aws:iam::911184320458:policy/grimlock-ecs-filestorage-service]
module.filestorage.data.aws_iam_policy_document.ecs-assume-role-policy: Reading...
module.filestorage.data.aws_iam_policy_document.ecs-assume-role-policy: Read complete after 0s [id=320642683]
module.generic-import-service-klm.data.aws_iam_policy_document.ecs-assume-role-policy: Reading...
module.generic-import-service-klm.data.aws_iam_policy_document.ecs-assume-role-policy: Read complete after 0s [id=320642683]
module.ag5-apis-python-grpc-builder.data.aws_caller_identity.current: Reading...
module.skills-systemtests.aws_cloudwatch_event_rule.trigger_event_rule["run-daily-skills-systemtests"]: Refreshing state... [id=run-daily-skills-systemtests]
aws_iam_role.aws_siem_ingester_lambda_role: Refreshing state... [id=aws_siem_ingester_sns_lambda_role]
module.js-monorepo-tests.data.aws_caller_identity.current: Read complete after 0s [id=911184320458]
module.parq-fetcher_test.data.aws_region.current: Reading...
module.parq-fetcher_test.data.aws_region.current: Read complete after 0s [id=eu-central-1]
module.filestorage.aws_ecr_repository.qr3-filestorage: Refreshing state... [id=qr3-filestorage]
module.ag5-apis-python-grpc-builder.data.aws_caller_identity.current: Read complete after 0s [id=911184320458]
module.ag5-apis-json-generator.data.aws_caller_identity.current: Reading...
module.ag5-apis-json-generator.data.aws_caller_identity.current: Read complete after 0s [id=911184320458]
aws_iam_policy.ag5_notify_sns_imagebuilder: Refreshing state... [id=arn:aws:iam::911184320458:policy/ag5-notify-sns-imagebuilder]
aws_iam_policy.lambda-config-retention-checker-ag5-get-resource-tags: Refreshing state... [id=arn:aws:iam::911184320458:policy/ag5-get-resource-tags]
module.siem-prod.aws_sqs_queue.queue: Refreshing state... [id=https://sqs.eu-central-1.amazonaws.com/911184320458/siem-ingester-prod]
aws_ecr_repository.qr3-alphatrion: Refreshing state... [id=qr3-alphatrion-pdfsigner-service]
aws_iam_policy.olympus-lms-import-service-write-s3: Refreshing state... [id=arn:aws:iam::911184320458:policy/olympus-lms-import-service-write-s3]
aws_iam_role.qr3-ecs-mirage-task-execution: Refreshing state... [id=qr3-ecs-mirage-task-execution]
aws_iam_role.qr3-repository-service-task-execution-role: Refreshing state... [id=grimlock-ecs-vw-serverpool-task-execution]
aws_iam_role.qr3-ecs-scorn-task-execution: Refreshing state... [id=qr3-ecs-scorn-task-execution]
module.parq-entity-cloudevents-prod.aws_iam_policy.allow-access: Refreshing state... [id=arn:aws:iam::911184320458:policy/parq-entity-cloudevents-prod-allow-access]
aws_iam_role.qr3-ecs-wololo-task-execution: Refreshing state... [id=qr3-ecs-wololo-task-execution]
module.compliance-prod.aws_iam_policy.allow-access: Refreshing state... [id=arn:aws:iam::911184320458:policy/compliance-prod-allow-access]
module.siem-test.aws_iam_policy.allow-access: Refreshing state... [id=arn:aws:iam::911184320458:policy/siem-ingester-test-allow-access]
aws_iam_policy.parq-eventchanges-test-allow-submit-event: Refreshing state... [id=arn:aws:iam::911184320458:policy/parq-eventchanges-test-allow-submit-event]
aws_iam_policy.parq-eventchanges-test: Refreshing state... [id=arn:aws:iam::911184320458:policy/parq-eventchanges-test]
data.aws_iam_policy_document.aws_siem_ingester_sns_topic_policy: Reading...
data.aws_iam_policy_document.aws_siem_ingester_sns_topic_policy: Read complete after 0s [id=3500768793]
aws_db_event_subscription.rds-to-sns-subscription: Refreshing state... [id=rds-event-subscription]
aws_lambda_permission.allow_invocation_from_sns: Refreshing state... [id=AllowExecutionFromSNS]
aws_cloudwatch_event_target.guardduty_to_sns_event_rule: Refreshing state... [id=capture-guardduty-events-SendToSNS]
aws_iam_user_policy_attachment.ci-codebuild-policy: Refreshing state... [id=ci-20220823093653913400000001]
module.parq-entity-cloudevents-test.aws_iam_policy.allow-access: Refreshing state... [id=arn:aws:iam::911184320458:policy/parq-entity-cloudevents-test-allow-access]
aws_iam_role.qr3-ecs-alphatrion-task-execution: Refreshing state... [id=qr3-ecs-alphatrion-task-execution]
aws_lb_listener.qr3-private-loadbalancer: Refreshing state... [id=arn:aws:elasticloadbalancing:eu-central-1:911184320458:listener/app/qr3-private/77d1fbbf8e55d03f/93a9ac52456b118e]
aws_alb_listener.qr3: Refreshing state... [id=arn:aws:elasticloadbalancing:eu-central-1:911184320458:listener/app/qr3-grimlock/34eb4ba3219fcc1e/da84298308027fbb]
aws_iam_policy.pippi-service-read-auth-key: Refreshing state... [id=arn:aws:iam::911184320458:policy/pippi-service-read-prod-auth-key]
aws_iam_user_policy_attachment.terraform-codebuild-policy: Refreshing state... [id=terraform-20220818065606016900000002]
module.compliance-test.aws_iam_policy.allow-access: Refreshing state... [id=arn:aws:iam::911184320458:policy/compliance-test-allow-access]
module.siem-prod.aws_iam_policy.allow-access: Refreshing state... [id=arn:aws:iam::911184320458:policy/siem-ingester-prod-allow-access]
aws_iam_role_policy_attachment.lambda_logs: Refreshing state... [id=aws_siem_ingester_sns_lambda_role-20220907072307217700000001]
aws_security_group.grimlock_db_access: Refreshing state... [id=sg-09df1dcb43b2c5f49]
aws_alb_target_group.qr3-mirage: Refreshing state... [id=arn:aws:elasticloadbalancing:eu-central-1:911184320458:targetgroup/ecs-qr3-mirage/b3d641642d5f7810]
aws_alb_target_group.qr3-alphatrion: Refreshing state... [id=arn:aws:elasticloadbalancing:eu-central-1:911184320458:targetgroup/ecs-qr3-alphatrion/8810d5a14d4b0bc8]
aws_alb_target_group.qr3-scorn: Refreshing state... [id=arn:aws:elasticloadbalancing:eu-central-1:911184320458:targetgroup/ecs-qr3-scorn/4b9af8fa4674b0b2]
aws_alb_target_group.qr3-wololo: Refreshing state... [id=arn:aws:elasticloadbalancing:eu-central-1:911184320458:targetgroup/ecs-qr3-wololo/07b431e23a49243b]
aws_security_group.ecs-grimlock-grpc-service: Refreshing state... [id=sg-08365980db221a938]
aws_sns_topic_policy.aws_siem_ingester_sns_policy: Refreshing state... [id=arn:aws:sns:eu-central-1:911184320458:aws_siem_ingester_sns]
aws_iam_role.qr3-repository-service-task-role: Refreshing state... [id=grimlock-ecs-vw-service]
aws_ecs_task_definition.qr3-scorn: Refreshing state... [id=qr3-scorn]
aws_ecs_task_definition.qr3-mirage: Refreshing state... [id=qr3-mirage]
data.aws_iam_policy.AWSConfigRulesExecutionRole: Read complete after 5s [id=arn:aws:iam::aws:policy/service-role/AWSConfigRulesExecutionRole]
aws_ecs_task_definition.qr3-wololo: Refreshing state... [id=qr3-wololo]
aws_s3_bucket_versioning.qr3-terraform-state: Refreshing state... [id=qr3-terraform-state]
aws_s3_bucket_server_side_encryption_configuration.qr3-terraform-state: Refreshing state... [id=qr3-terraform-state]
aws_s3_bucket_public_access_block.qr3-terraform-state: Refreshing state... [id=qr3-terraform-state]
aws_lambda_function.aws_siem_ingester_lambda: Refreshing state... [id=ag5-aws-siem-event-ingester]
aws_ecs_task_definition.qr3-alphatrion: Refreshing state... [id=qr3-alphatrion]
module.filestorage.aws_alb_target_group.filestorage: Refreshing state... [id=arn:aws:elasticloadbalancing:eu-central-1:911184320458:targetgroup/grimlock-filestorage/03cf221fb4b2d270]
aws_iam_role_policy_attachment.aws_siem_ingester_sqs_policy_attachment: Refreshing state... [id=aws_siem_ingester_sns_lambda_role-20221006125058059000000001]
aws_lb_listener_rule.qr3-scorn: Refreshing state... [id=arn:aws:elasticloadbalancing:eu-central-1:911184320458:listener-rule/app/qr3-private/77d1fbbf8e55d03f/93a9ac52456b118e/16f6ab85cb7c9e62]
aws_ecs_service.qr3-scorn: Refreshing state... [id=arn:aws:ecs:eu-central-1:911184320458:service/QR3GrimlockCluster/qr3-scorn]
aws_lb_listener_rule.qr3-alphatrion: Refreshing state... [id=arn:aws:elasticloadbalancing:eu-central-1:911184320458:listener-rule/app/qr3-private/77d1fbbf8e55d03f/93a9ac52456b118e/2390eb17f421afbc]
aws_lb_listener_rule.qr3-mirage: Refreshing state... [id=arn:aws:elasticloadbalancing:eu-central-1:911184320458:listener-rule/app/qr3-private/77d1fbbf8e55d03f/93a9ac52456b118e/c690a8d76acdc4e0]
aws_ecs_service.qr3-mirage: Refreshing state... [id=arn:aws:ecs:eu-central-1:911184320458:service/QR3GrimlockCluster/qr3-mirage]
aws_ecs_service.qr3-alphatrion: Refreshing state... [id=arn:aws:ecs:eu-central-1:911184320458:service/QR3GrimlockCluster/qr3-alphatrion]
aws_lb_listener_rule.qr3-wololo: Refreshing state... [id=arn:aws:elasticloadbalancing:eu-central-1:911184320458:listener-rule/app/qr3-private/77d1fbbf8e55d03f/93a9ac52456b118e/dbd3efcc63847fc3]
aws_ecs_service.qr3-wololo: Refreshing state... [id=arn:aws:ecs:eu-central-1:911184320458:service/QR3GrimlockCluster/qr3-wololo]
aws_sns_topic_subscription.aws_siem_ingester_subscription: Refreshing state... [id=arn:aws:sns:eu-central-1:911184320458:aws_siem_ingester_sns:02816006-e1fe-4dc6-9a56-c1d82eff2a96]
aws_ecr_repository.ag5-codebuild-base: Refreshing state... [id=ag5-codebuild-base]
aws_ssm_parameter.olympus-lms-import-service-acceptance-api-key: Refreshing state... [id=/qr3/service/integration/olympus-lms-import-service/acceptance/api-key]
module.ag5-codebuild-base-repository.aws_ecr_repository.repository: Refreshing state... [id=cicd-ag5-codebuild-base]
aws_iam_policy.olympus-lms-import-service-read-acceptance-api-key: Refreshing state... [id=arn:aws:iam::911184320458:policy/olympus-lms-import-service-read-acceptance-api-key]
module.import-klm-iauditor-prod-read-config.aws_ssm_parameter.parameter: Refreshing state... [id=/import/generic-import/prod/klmcargo-iauditor/config]
module.ag5-apis-python-grpc-builder.aws_iam_policy.codebuild_base_policy: Refreshing state... [id=arn:aws:iam::911184320458:policy/service-role/CodeBuildBasePolicy-ag5-apis-python-grpc-builder-eu-central-1]
module.ag5-apis-python-grpc-builder.aws_iam_role.service-role: Refreshing state... [id=codebuild-ag5-apis-python-grpc-builder-service-role]
module.js-monorepo-tests.aws_iam_role.service-role: Refreshing state... [id=codebuild-js-monorepo-tests-service-role]
module.js-monorepo-tests.aws_iam_policy.codebuild_base_policy: Refreshing state... [id=arn:aws:iam::911184320458:policy/service-role/CodeBuildBasePolicy-js-monorepo-tests-eu-central-1]
module.ag5-gpg-private-key.aws_ssm_parameter.parameter: Refreshing state... [id=/gpg/global/ag5-private-key]
module.kangaroo_service_descriptor.aws_ecr_repository.default: Refreshing state... [id=go-kangaroo-service]
module.kangaroo_service_descriptor.aws_security_group.default: Refreshing state... [id=sg-001267993ca418c64]
module.siem-enricher-ecr.aws_ecr_repository.repository: Refreshing state... [id=ag5-siem-enricher]
module.build-smalltalk-image.aws_iam_role.service-role: Refreshing state... [id=codebuild-build-smalltalk-image-service-role]
module.build-smalltalk-image.aws_iam_policy.codebuild_base_policy: Refreshing state... [id=arn:aws:iam::911184320458:policy/service-role/CodeBuildBasePolicy-build-smalltalk-image-eu-central-1]
module.build-smalltalk-image.aws_iam_policy.codebuild_vpc_policy[0]: Refreshing state... [id=arn:aws:iam::911184320458:policy/service-role/CodeBuildVpcPolicy-build-smalltalk-image-eu-central-1]
module.ag5-apis-grpc-builder.aws_iam_role.service-role: Refreshing state... [id=codebuild-ag5-apis-grpc-builder-service-role]
module.seapray_dev_kangaroo_service_account_readonly_parameter.aws_ssm_parameter.parameter: Refreshing state... [id=/seaspray/kangaroo/dev/service-account]
module.ag5-apis-grpc-builder.aws_iam_policy.codebuild_base_policy: Refreshing state... [id=arn:aws:iam::911184320458:policy/service-role/CodeBuildBasePolicy-ag5-apis-grpc-builder-eu-central-1]
module.grimlock_db_dsn_readonly_parameter.aws_ssm_parameter.parameter: Refreshing state... [id=/grimlock/database/global/db-dsn-read-only]
module.ag5-devtools-submit-secad-report-descriptor.aws_security_group.default[0]: Refreshing state... [id=sg-02dd85b215b3c989e]
module.siem_events.aws_sns_topic.sns_topic: Refreshing state... [id=arn:aws:sns:eu-central-1:911184320458:siem-global-siem-events]
module.generic-import-service-descriptor.aws_security_group.default: Refreshing state... [id=sg-016514f0f4960a410]
module.parq-fetcher_service_descriptor.aws_ecr_repository.default: Refreshing state... [id=go-parq-fetcher]
module.update-lokalise.aws_iam_role.service-role: Refreshing state... [id=codebuild-update-lokalise-service-role]
module.generic-import-service-descriptor.aws_ecr_repository.default: Refreshing state... [id=generic-rest-import-service]
module.parq-fetcher_service_descriptor.aws_security_group.default: Refreshing state... [id=sg-09dad2445788cefe1]
module.update-lokalise.aws_iam_policy.codebuild_base_policy: Refreshing state... [id=arn:aws:iam::911184320458:policy/service-role/CodeBuildBasePolicy-update-lokalise-eu-central-1]
module.sns_aws_events.aws_sns_topic.sns_topic: Refreshing state... [id=arn:aws:sns:eu-central-1:911184320458:siem-global-aws-events]
module.go-release-builder.aws_iam_policy.codebuild_base_policy: Refreshing state... [id=arn:aws:iam::911184320458:policy/service-role/CodeBuildBasePolicy-go-release-builder-eu-central-1]
module.go-release-builder.aws_iam_role.service-role: Refreshing state... [id=codebuild-go-release-builder-service-role]
module.hemingway_service_descriptor.aws_ecr_repository.default: Refreshing state... [id=go-hemingway-service]
module.hemingway_service_descriptor.aws_security_group.default: Refreshing state... [id=sg-035d9a53d335e313e]
module.siem_enricher_descriptor.aws_security_group.default[0]: Refreshing state... [id=sg-02b6a433d400927b5]
module.update-ag5-blog.aws_iam_role.build-trigger-role[0]: Refreshing state... [id=codebuild-update-ag5-blog-trigger]
module.update-ag5-blog.aws_iam_role.service-role: Refreshing state... [id=codebuild-update-ag5-blog-service-role]
module.update-ag5-blog.aws_iam_policy.codebuild_base_policy: Refreshing state... [id=arn:aws:iam::911184320458:policy/service-role/CodeBuildBasePolicy-update-ag5-blog-eu-central-1]
module.sftp_service_descriptor.aws_ecr_repository.default: Refreshing state... [id=qr3-sftp-service]
module.sftp_service_descriptor.aws_security_group.default: Refreshing state... [id=sg-022c268178878c304]
module.auth-service_descriptor.aws_security_group.default: Refreshing state... [id=sg-06f3d75c3b7acb5fe]
module.auth-service_descriptor.aws_ecr_repository.default: Refreshing state... [id=hvr-auth-service]
module.pippi_service_descriptor.aws_ecr_repository.default: Refreshing state... [id=pippi-import-service]
module.pippi_service_descriptor.aws_security_group.default: Refreshing state... [id=sg-046baade323f9abf7]
module.frontend-deploy.aws_iam_policy.codebuild_base_policy: Refreshing state... [id=arn:aws:iam::911184320458:policy/service-role/CodeBuildBasePolicy-frontend-deploy-eu-central-1]
module.skills-systemtests.aws_iam_policy.codebuild_base_policy: Refreshing state... [id=arn:aws:iam::911184320458:policy/service-role/CodeBuildBasePolicy-skills-systemtests-eu-central-1]
module.skills-systemtests.aws_iam_role.service-role: Refreshing state... [id=codebuild-skills-systemtests-service-role]
module.aws-config-compliance-ecs-task-definition-checker-ecr.aws_ecr_repository.repository: Refreshing state... [id=aws-config-compliance-ecs-td-checker-lambda]
module.skills-systemtests.aws_iam_role.build-trigger-role[0]: Refreshing state... [id=codebuild-skills-systemtests-trigger]
module.skills-integration-systemtests.aws_iam_policy.codebuild_base_policy: Refreshing state... [id=arn:aws:iam::911184320458:policy/service-role/CodeBuildBasePolicy-skills-integration-systemtests-eu-central-1]
module.frontend-deploy.aws_iam_policy.codebuild_vpc_policy[0]: Refreshing state... [id=arn:aws:iam::911184320458:policy/service-role/CodeBuildVpcPolicy-frontend-deploy-eu-central-1]
module.aws-event-siemyfier-ecr.aws_ecr_repository.repository: Refreshing state... [id=aws-event-siemyfier]
module.epsilon-gpg-private-key.aws_ssm_parameter.parameter: Refreshing state... [id=/gpg/global/epsilon-private-key]
module.skills-integration-systemtests.aws_iam_role.service-role: Refreshing state... [id=codebuild-skills-integration-systemtests-service-role]
module.skills-integration-systemtests.aws_iam_role.build-trigger-role[0]: Refreshing state... [id=codebuild-skills-integration-systemtests-trigger]
module.frontend-deploy.aws_iam_role.service-role: Refreshing state... [id=codebuild-frontend-deploy-service-role]
module.holysheet_service_descriptor.aws_security_group.default: Refreshing state... [id=sg-0046c7d39660554e9]
module.python-libs-tests.aws_iam_policy.codebuild_base_policy: Refreshing state... [id=arn:aws:iam::911184320458:policy/service-role/CodeBuildBasePolicy-python-libs-tests-eu-central-1]
module.python-libs-tests.aws_iam_role.service-role: Refreshing state... [id=codebuild-python-libs-tests-service-role]
module.ag5-devtools-submit-secad-report-ecr.aws_ecr_repository.repository: Refreshing state... [id=devtools-submit-secad-report-lambda]
module.holysheet_service_descriptor.aws_ecr_repository.default: Refreshing state... [id=holysheet-service]
module.auth-support-service_descriptor.aws_ecr_repository.default: Refreshing state... [id=auth-support-service]
module.auth-support-service_descriptor.aws_security_group.default: Refreshing state... [id=sg-02df7f0ddb9eaf877]
module.olympus_lms_import_service_descriptor.aws_security_group.default: Refreshing state... [id=sg-0e857252a3c032949]
module.olympus_lms_import_service_descriptor.aws_ecr_repository.default: Refreshing state... [id=go-olympus-lms-import-service]
module.seapray_prod_kangaroo_service_account_readonly_parameter.aws_ssm_parameter.parameter: Refreshing state... [id=/seaspray/kangaroo/prod/service-account]
module.scim_service_descriptor.aws_ecr_repository.default: Refreshing state... [id=qr3-scim-service]
module.scim_service_descriptor.aws_security_group.default: Refreshing state... [id=sg-0fdfe75f7cc86019c]
module.aws_event_siemyfier_descriptor.aws_security_group.default[0]: Refreshing state... [id=sg-0e0faae487605bcb8]
module.raw_siem_events.aws_sns_topic.sns_topic: Refreshing state... [id=arn:aws:sns:eu-central-1:911184320458:siem-global-raw-siem-events]
module.sso_service_descriptor.aws_ecr_repository.default: Refreshing state... [id=qr3-sso-server]
module.sso_service_descriptor.aws_security_group.default: Refreshing state... [id=sg-08a0acfd9042432b1]
module.python-libs-release-builder.aws_iam_role.service-role: Refreshing state... [id=codebuild-python-libs-release-builder-service-role]
module.python-libs-release-builder.aws_iam_policy.codebuild_base_policy: Refreshing state... [id=arn:aws:iam::911184320458:policy/service-role/CodeBuildBasePolicy-python-libs-release-builder-eu-central-1]
module.aws-config-cloudwatch-retention-check-ecr.aws_ecr_repository.repository: Refreshing state... [id=aws-config-cloudwatch-retention-check-lambda]
module.devtools_db_dsn_readonly_parameter.aws_ssm_parameter.parameter: Refreshing state... [id=/devtools/database/global/db-dsn-read-only]
module.kangaroo_service_descriptor.aws_security_group_rule.internet-access: Refreshing state... [id=sgrule-213628622]
module.kangaroo_service_descriptor.aws_security_group_rule.vpn-access["HTTP Diagnose"]: Refreshing state... [id=sgrule-1555130780]
module.js-monorepo-tests.aws_iam_role_policy_attachment.iam_provided_policies_attachment["ag5-slack-token-ssm-access"]: Refreshing state... [id=codebuild-js-monorepo-tests-service-role-20220922093620150100000001]
module.js-monorepo-tests.aws_iam_role_policy_attachment.iam_provided_policies_attachment["invoke-slack-notifier"]: Refreshing state... [id=codebuild-js-monorepo-tests-service-role-20220922090647105900000001]
module.js-monorepo-tests.aws_iam_role_policy_attachment.iam_provided_policies_attachment["pull-ecr-image"]: Refreshing state... [id=codebuild-js-monorepo-tests-service-role-20220922090647255200000003]
module.js-monorepo-tests.aws_iam_role_policy_attachment.base_policy_attachment: Refreshing state... [id=codebuild-js-monorepo-tests-service-role-20220922090647111500000002]
module.js-monorepo-tests.aws_codebuild_project.code_build_project: Refreshing state... [id=arn:aws:codebuild:eu-central-1:911184320458:project/js-monorepo-tests]
module.ag5-apis-python-grpc-builder.aws_iam_role_policy_attachment.base_policy_attachment: Refreshing state... [id=codebuild-ag5-apis-python-grpc-builder-service-role-arn:aws:iam::911184320458:policy/service-role/CodeBuildBasePolicy-ag5-apis-python-grpc-builder-eu-central-1]
module.ag5-apis-python-grpc-builder.aws_iam_role_policy_attachment.iam_provided_policies_attachment["github-ci-private-key"]: Refreshing state... [id=codebuild-ag5-apis-python-grpc-builder-service-role-arn:aws:iam::911184320458:policy/ag5-access-github-ci-private-key]
module.ag5-apis-python-grpc-builder.aws_codebuild_project.code_build_project: Refreshing state... [id=ag5-apis-python-grpc-builder]
module.import-klm-iauditor-prod-read-config.aws_iam_policy.read-policy: Refreshing state... [id=arn:aws:iam::911184320458:policy/parameter-import-prod-generic-import-klmcargo-iauditor-config-allow-read]
module.ag5-devtools-submit-secad-report-descriptor.aws_security_group_rule.load-balancer-in[0]: Refreshing state... [id=sgrule-2055556420]
module.ag5-devtools-submit-secad-report-descriptor.aws_security_group_rule.internet-access[0]: Refreshing state... [id=sgrule-742700082]
module.generic-import-service-descriptor.aws_security_group_rule.load-balancer-in[0]: Refreshing state... [id=sgrule-1868331691]
module.generic-import-service-descriptor.aws_security_group_rule.internet-access: Refreshing state... [id=sgrule-415050375]
module.build-smalltalk-image.aws_iam_role_policy_attachment.iam_provided_policies_attachment["pull-ecr-image"]: Refreshing state... [id=codebuild-build-smalltalk-image-service-role-arn:aws:iam::911184320458:policy/ag5-pull-ecr-images]
module.build-smalltalk-image.aws_iam_role_policy_attachment.iam_provided_policies_attachment["ag5-package-rw"]: Refreshing state... [id=codebuild-build-smalltalk-image-service-role-arn:aws:iam::911184320458:policy/ag5-packages-rw]
module.build-smalltalk-image.aws_iam_role_policy_attachment.iam_provided_policies_attachment["notify-sns"]: Refreshing state... [id=codebuild-build-smalltalk-image-service-role-arn:aws:iam::911184320458:policy/ag5-notify-sns-imagebuilder]
module.build-smalltalk-image.aws_iam_role_policy_attachment.base_policy_attachment: Refreshing state... [id=codebuild-build-smalltalk-image-service-role-arn:aws:iam::911184320458:policy/service-role/CodeBuildBasePolicy-build-smalltalk-image-eu-central-1]
module.build-smalltalk-image.aws_codebuild_project.code_build_project: Refreshing state... [id=build-smalltalk-image]
module.build-smalltalk-image.aws_iam_role_policy_attachment.vpc_policy_attachment[0]: Refreshing state... [id=codebuild-build-smalltalk-image-service-role-arn:aws:iam::911184320458:policy/service-role/CodeBuildVpcPolicy-build-smalltalk-image-eu-central-1]
module.siem_events.aws_iam_policy.publish_policy: Refreshing state... [id=arn:aws:iam::911184320458:policy/siem-global-siem-events_publish_policy]
module.ag5-gpg-private-key.aws_iam_policy.read-policy: Refreshing state... [id=arn:aws:iam::911184320458:policy/parameter-gpg-global-ag5-private-key-allow-read]
module.parq-fetcher_service_descriptor.aws_security_group_rule.internet-access: Refreshing state... [id=sgrule-1365743934]
module.parq-fetcher_service_descriptor.aws_security_group_rule.vpn-access["HTTP Diagnose"]: Refreshing state... [id=sgrule-2458024476]
module.ag5-apis-grpc-builder.aws_iam_role_policy_attachment.iam_provided_policies_attachment["pull-ecr-image"]: Refreshing state... [id=codebuild-ag5-apis-grpc-builder-service-role-20221115154002828900000001]
module.ag5-apis-grpc-builder.aws_iam_role_policy_attachment.base_policy_attachment: Refreshing state... [id=codebuild-ag5-apis-grpc-builder-service-role-arn:aws:iam::911184320458:policy/service-role/CodeBuildBasePolicy-ag5-apis-grpc-builder-eu-central-1]
module.ag5-apis-grpc-builder.aws_iam_role_policy_attachment.iam_provided_policies_attachment["invoke-slack-notifier"]: Refreshing state... [id=codebuild-ag5-apis-grpc-builder-service-role-arn:aws:iam::911184320458:policy/ag5-slack-notifier-lambda-invoke]
module.ag5-apis-grpc-builder.aws_codebuild_project.code_build_project: Refreshing state... [id=ag5-apis-grpc-builder]
module.seapray_dev_kangaroo_service_account_readonly_parameter.aws_iam_policy.read-policy: Refreshing state... [id=arn:aws:iam::911184320458:policy/parameter-seaspray-dev-kangaroo-service-account-allow-read]
module.update-lokalise.aws_iam_role_policy_attachment.base_policy_attachment: Refreshing state... [id=codebuild-update-lokalise-service-role-arn:aws:iam::911184320458:policy/service-role/CodeBuildBasePolicy-update-lokalise-eu-central-1]
module.update-lokalise.aws_codebuild_project.code_build_project: Refreshing state... [id=update-lokalise]
module.update-lokalise.aws_iam_role_policy_attachment.iam_provided_policies_attachment["github-ci-private-key"]: Refreshing state... [id=codebuild-update-lokalise-service-role-arn:aws:iam::911184320458:policy/ag5-access-github-ci-private-key]
module.update-lokalise.aws_iam_role_policy_attachment.iam_provided_policies_attachment["invoke-slack-notifier"]: Refreshing state... [id=codebuild-update-lokalise-service-role-arn:aws:iam::911184320458:policy/ag5-slack-notifier-lambda-invoke]
module.sns_aws_events.aws_iam_policy.publish_policy: Refreshing state... [id=arn:aws:iam::911184320458:policy/siem-global-aws-events_publish_policy]
module.grimlock_db_dsn_readonly_parameter.aws_iam_policy.read-policy: Refreshing state... [id=arn:aws:iam::911184320458:policy/parameter-grimlock-global-database-db-dsn-read-only-allow-read]
module.hemingway_service_descriptor.aws_security_group_rule.internet-access: Refreshing state... [id=sgrule-3777559185]
module.hemingway_service_descriptor.aws_security_group_rule.grpc-load-balancer-in[0]: Refreshing state... [id=sgrule-3873488970]
module.siem_enricher_descriptor.aws_security_group_rule.internet-access[0]: Refreshing state... [id=sgrule-1814783050]
module.sftp_service_descriptor.aws_security_group_rule.internet-access: Refreshing state... [id=sgrule-2119910872]
module.auth-service_descriptor.aws_security_group_rule.internet-access: Refreshing state... [id=sgrule-1857057565]
module.auth-service_descriptor.aws_security_group_rule.load-balancer-in[0]: Refreshing state... [id=sgrule-128981246]
module.auth-service_descriptor.aws_security_group_rule.vpn-access["VNC"]: Refreshing state... [id=sgrule-841066544]
module.go-release-builder.aws_iam_role_policy_attachment.base_policy_attachment: Refreshing state... [id=codebuild-go-release-builder-service-role-arn:aws:iam::911184320458:policy/service-role/CodeBuildBasePolicy-go-release-builder-eu-central-1]
module.go-release-builder.aws_codebuild_project.code_build_project: Refreshing state... [id=go-release-builder]
module.go-release-builder.aws_iam_role_policy_attachment.iam_provided_policies_attachment["full-ecr-access"]: Refreshing state... [id=codebuild-go-release-builder-service-role-20221121080655948000000001]
module.go-release-builder.aws_iam_role_policy_attachment.iam_provided_policies_attachment["invoke-slack-notifier"]: Refreshing state... [id=codebuild-go-release-builder-service-role-arn:aws:iam::911184320458:policy/ag5-slack-notifier-lambda-invoke]
module.go-release-builder.aws_iam_role_policy_attachment.iam_provided_policies_attachment["pull-ecr-image"]: Refreshing state... [id=codebuild-go-release-builder-service-role-20221115154002863100000002]
module.pippi_service_descriptor.aws_security_group_rule.internet-access: Refreshing state... [id=sgrule-1570196018]
module.update-ag5-blog.aws_iam_role_policy_attachment.base_policy_attachment: Refreshing state... [id=codebuild-update-ag5-blog-service-role-arn:aws:iam::911184320458:policy/service-role/CodeBuildBasePolicy-update-ag5-blog-eu-central-1]
module.update-ag5-blog.aws_iam_role_policy_attachment.iam_provided_policies_attachment["update-blog"]: Refreshing state... [id=codebuild-update-ag5-blog-service-role-arn:aws:iam::911184320458:policy/update-ag5-blog]
module.update-ag5-blog.aws_codebuild_project.code_build_project: Refreshing state... [id=update-ag5-blog]
module.skills-systemtests.aws_iam_role_policy_attachment.base_policy_attachment: Refreshing state... [id=codebuild-skills-systemtests-service-role-arn:aws:iam::911184320458:policy/service-role/CodeBuildBasePolicy-skills-systemtests-eu-central-1]
module.skills-systemtests.aws_iam_role_policy_attachment.iam_provided_policies_attachment["prototype-build-artifacts"]: Refreshing state... [id=codebuild-skills-systemtests-service-role-arn:aws:iam::911184320458:policy/s3-prototype-build-artifacts-list-and-delete]
module.skills-systemtests.aws_iam_role_policy_attachment.iam_provided_policies_attachment["github-ci-private-key"]: Refreshing state... [id=codebuild-skills-systemtests-service-role-arn:aws:iam::911184320458:policy/ag5-access-github-ci-private-key]
module.skills-systemtests.aws_iam_role_policy_attachment.iam_provided_policies_attachment["skills-systemtests-reports"]: Refreshing state... [id=codebuild-skills-systemtests-service-role-arn:aws:iam::911184320458:policy/ag5-skills-systemtest-parameter-store-read]
module.skills-systemtests.aws_iam_role_policy_attachment.iam_provided_policies_attachment["invoke-slack-notifier"]: Refreshing state... [id=codebuild-skills-systemtests-service-role-arn:aws:iam::911184320458:policy/ag5-slack-notifier-lambda-invoke]
module.skills-systemtests.aws_codebuild_project.code_build_project: Refreshing state... [id=skills-systemtests]
module.epsilon-gpg-private-key.aws_iam_policy.read-policy: Refreshing state... [id=arn:aws:iam::911184320458:policy/parameter-gpg-global-epsilon-private-key-allow-read]
module.holysheet_service_descriptor.aws_security_group_rule.private-load-balancer-in[0]: Refreshing state... [id=sgrule-3603077682]
module.holysheet_service_descriptor.aws_security_group_rule.internet-access: Refreshing state... [id=sgrule-4122187010]
module.skills-integration-systemtests.aws_iam_role_policy_attachment.iam_provided_policies_attachment["skills-integration-configuration"]: Refreshing state... [id=codebuild-skills-integration-systemtests-service-role-arn:aws:iam::911184320458:policy/ag5-skills-integration-systemtest-parameter-store-read]
module.skills-integration-systemtests.aws_codebuild_project.code_build_project: Refreshing state... [id=skills-integration-systemtests]
module.skills-integration-systemtests.aws_iam_role_policy_attachment.base_policy_attachment: Refreshing state... [id=codebuild-skills-integration-systemtests-service-role-arn:aws:iam::911184320458:policy/service-role/CodeBuildBasePolicy-skills-integration-systemtests-eu-central-1]
module.skills-integration-systemtests.aws_iam_role_policy_attachment.iam_provided_policies_attachment["github-ci-private-key"]: Refreshing state... [id=codebuild-skills-integration-systemtests-service-role-arn:aws:iam::911184320458:policy/ag5-access-github-ci-private-key]
module.skills-integration-systemtests.aws_iam_role_policy_attachment.iam_provided_policies_attachment["invoke-slack-notifier"]: Refreshing state... [id=codebuild-skills-integration-systemtests-service-role-arn:aws:iam::911184320458:policy/ag5-slack-notifier-lambda-invoke]
module.skills-integration-systemtests.aws_iam_role_policy_attachment.iam_provided_policies_attachment["prototype-build-artifacts"]: Refreshing state... [id=codebuild-skills-integration-systemtests-service-role-arn:aws:iam::911184320458:policy/s3-prototype-build-artifacts-list-and-delete]
module.auth-support-service_descriptor.aws_security_group_rule.load-balancer-in[0]: Refreshing state... [id=sgrule-986966163]
module.auth-support-service_descriptor.aws_security_group_rule.internet-access: Refreshing state... [id=sgrule-1586069795]
module.frontend-deploy.aws_iam_role_policy_attachment.base_policy_attachment: Refreshing state... [id=codebuild-frontend-deploy-service-role-20221101120635184300000001]
module.frontend-deploy.aws_codebuild_project.code_build_project: Refreshing state... [id=arn:aws:codebuild:eu-central-1:911184320458:project/frontend-deploy]
module.frontend-deploy.aws_iam_role_policy_attachment.iam_provided_policies_attachment["invoke-slack-notifier"]: Refreshing state... [id=codebuild-frontend-deploy-service-role-20221101120903504600000003]
module.frontend-deploy.aws_iam_role_policy_attachment.iam_provided_policies_attachment["pull-ecr-image"]: Refreshing state... [id=codebuild-frontend-deploy-service-role-20221101120903483800000001]
module.frontend-deploy.aws_iam_role_policy_attachment.iam_provided_policies_attachment["qr3-cdn-content-s3-access"]: Refreshing state... [id=codebuild-frontend-deploy-service-role-20221101120903496800000002]
module.frontend-deploy.aws_iam_role_policy_attachment.vpc_policy_attachment[0]: Refreshing state... [id=codebuild-frontend-deploy-service-role-20221103140636518000000001]
module.olympus_lms_import_service_descriptor.aws_security_group_rule.internet-access: Refreshing state... [id=sgrule-1368821069]
module.olympus_lms_import_service_descriptor.aws_security_group_rule.load-balancer-in[0]: Refreshing state... [id=sgrule-1586022582]
module.aws_event_siemyfier_descriptor.aws_security_group_rule.internet-access[0]: Refreshing state... [id=sgrule-4023708355]
module.python-libs-tests.aws_iam_role_policy_attachment.base_policy_attachment: Refreshing state... [id=codebuild-python-libs-tests-service-role-arn:aws:iam::911184320458:policy/service-role/CodeBuildBasePolicy-python-libs-tests-eu-central-1]
module.python-libs-tests.aws_iam_role_policy_attachment.iam_provided_policies_attachment["invoke-slack-notifier"]: Refreshing state... [id=codebuild-python-libs-tests-service-role-arn:aws:iam::911184320458:policy/ag5-slack-notifier-lambda-invoke]
module.python-libs-tests.aws_iam_role_policy_attachment.iam_provided_policies_attachment["pull-ecr-image"]: Refreshing state... [id=codebuild-python-libs-tests-service-role-arn:aws:iam::911184320458:policy/ag5-pull-ecr-images]
module.python-libs-tests.aws_codebuild_project.code_build_project: Refreshing state... [id=python-libs-tests]
module.scim_service_descriptor.aws_security_group_rule.load-balancer-in[0]: Refreshing state... [id=sgrule-3596385070]
module.scim_service_descriptor.aws_security_group_rule.internet-access: Refreshing state... [id=sgrule-1653746253]
module.sso_service_descriptor.aws_security_group_rule.load-balancer-in[0]: Refreshing state... [id=sgrule-2856086098]
module.sso_service_descriptor.aws_security_group_rule.internet-access: Refreshing state... [id=sgrule-2131980134]
module.raw_siem_events.aws_iam_policy.publish_policy: Refreshing state... [id=arn:aws:iam::911184320458:policy/siem-global-raw-siem-events_publish_policy]
module.seapray_prod_kangaroo_service_account_readonly_parameter.aws_iam_policy.read-policy: Refreshing state... [id=arn:aws:iam::911184320458:policy/parameter-seaspray-prod-kangaroo-service-account-allow-read]
module.devtools_db_dsn_readonly_parameter.aws_iam_policy.read-policy: Refreshing state... [id=arn:aws:iam::911184320458:policy/parameter-devtools-global-database-db-dsn-read-only-allow-read]
module.python-libs-release-builder.aws_iam_role_policy_attachment.base_policy_attachment: Refreshing state... [id=codebuild-python-libs-release-builder-service-role-arn:aws:iam::911184320458:policy/service-role/CodeBuildBasePolicy-python-libs-release-builder-eu-central-1]
module.python-libs-release-builder.aws_codebuild_project.code_build_project: Refreshing state... [id=python-libs-release-builder]
module.python-libs-release-builder.aws_iam_role_policy_attachment.iam_provided_policies_attachment["invoke-slack-notifier"]: Refreshing state... [id=codebuild-python-libs-release-builder-service-role-20220829130443856300000003]
module.python-libs-release-builder.aws_iam_role_policy_attachment.iam_provided_policies_attachment["pull-ecr-image"]: Refreshing state... [id=codebuild-python-libs-release-builder-service-role-20221115154002905800000003]
module.js-monorepo-tests.aws_codebuild_webhook.webhook[0]: Refreshing state... [id=js-monorepo-tests]
module.ag5-apis-grpc-builder.aws_codebuild_webhook.webhook[0]: Refreshing state... [id=ag5-apis-grpc-builder]
module.update-lokalise.aws_codebuild_webhook.webhook[0]: Refreshing state... [id=update-lokalise]
module.update-ag5-blog.aws_iam_policy.build_trigger_policy[0]: Refreshing state... [id=arn:aws:iam::911184320458:policy/service-role/CodeBuildTrigger-update-ag5-blog-eu-central-1]
module.skills-systemtests.aws_codebuild_webhook.webhook[0]: Refreshing state... [id=skills-systemtests]
module.update-ag5-blog.aws_cloudwatch_event_target.trigger_event_target["every-two-hours-between-work-hours-day"]: Refreshing state... [id=every-two-hours-between-work-hours-day-terraform-20220829134325194400000001]
module.update-ag5-blog.aws_codebuild_webhook.webhook[0]: Refreshing state... [id=update-ag5-blog]
module.skills-systemtests.aws_iam_policy.build_trigger_policy[0]: Refreshing state... [id=arn:aws:iam::911184320458:policy/service-role/CodeBuildTrigger-skills-systemtests-eu-central-1]
module.skills-systemtests.aws_cloudwatch_event_target.trigger_event_target["run-daily-skills-systemtests"]: Refreshing state... [id=run-daily-skills-systemtests-terraform-20220829134325207300000003]
module.skills-integration-systemtests.aws_codebuild_webhook.webhook[0]: Refreshing state... [id=skills-integration-systemtests]
module.skills-integration-systemtests.aws_iam_policy.build_trigger_policy[0]: Refreshing state... [id=arn:aws:iam::911184320458:policy/service-role/CodeBuildTrigger-skills-integration-systemtests-eu-central-1]
module.skills-integration-systemtests.aws_cloudwatch_event_target.trigger_event_target["run-daily-skills-integration-systemtests"]: Refreshing state... [id=run-daily-skills-integration-systemtests-terraform-20220829134325196200000002]
module.python-libs-tests.aws_codebuild_webhook.webhook[0]: Refreshing state... [id=python-libs-tests]
module.json_schema_store_bucket.aws_s3_bucket.bucket: Refreshing state... [id=schemas-json-schemas-store]
module.ag5-apis-json-generator.aws_iam_policy.codebuild_base_policy: Refreshing state... [id=arn:aws:iam::911184320458:policy/service-role/CodeBuildBasePolicy-ag5-apis-json-generator-eu-central-1]
module.ag5-apis-json-generator.aws_iam_role.service-role: Refreshing state... [id=codebuild-ag5-apis-json-generator-service-role]
module.python-libs-release-builder.aws_codebuild_webhook.webhook[0]: Refreshing state... [id=python-libs-release-builder]
module.update-ag5-blog.aws_iam_role_policy_attachment.build_trigger_policy_attachment[0]: Refreshing state... [id=codebuild-update-ag5-blog-trigger-20220829134645273900000001]
module.parameters_store_backup.aws_iam_role.build-trigger-role[0]: Refreshing state... [id=codebuild-parametersstorebackup-trigger]
module.parameters_store_backup.aws_iam_role.service-role: Refreshing state... [id=codebuild-parametersstorebackup-service-role]
module.parameters_store_backup.aws_iam_policy.codebuild_base_policy: Refreshing state... [id=arn:aws:iam::911184320458:policy/service-role/CodeBuildBasePolicy-parametersstorebackup-eu-central-1]
module.skills-systemtests.aws_iam_role_policy_attachment.build_trigger_policy_attachment[0]: Refreshing state... [id=codebuild-skills-systemtests-trigger-20220829134645334500000002]
module.parameters_store_backup_bucket.aws_s3_bucket.bucket: Refreshing state... [id=backup-parametersstorebackup]
module.skills-integration-systemtests.aws_iam_role_policy_attachment.build_trigger_policy_attachment[0]: Refreshing state... [id=codebuild-skills-integration-systemtests-trigger-20220829134645335500000003]
module.ag5-devtools-submit-secad-report-lambda.aws_iam_role.aws_lambda_role: Refreshing state... [id=devtools-production-submit-secad-report_lambda-role]
module.aws-config-cloudwatch-retention-check-lambda.aws_iam_role.aws_lambda_role: Refreshing state... [id=aws-production-config-cloudwatch-retention-check_lambda-role]
module.filestorage.aws_iam_role.task-role: Refreshing state... [id=grimlock-ecs-filestorage-service]
module.aws-config-compliance-ecs-task-definition-checker-lambda.aws_iam_role.aws_lambda_role: Refreshing state... [id=aws-production-config-compliance-ecs-td-checker_lambda-role]
module.ag5-apis-json-generator.aws_codebuild_project.code_build_project: Refreshing state... [id=ag5-apis-json-generator]
module.ag5-apis-json-generator.aws_iam_role_policy_attachment.base_policy_attachment: Refreshing state... [id=codebuild-ag5-apis-json-generator-service-role-20221115134919294500000001]
module.parameters_store_backup.aws_iam_role_policy_attachment.base_policy_attachment: Refreshing state... [id=codebuild-parametersstorebackup-service-role-20221116092608683500000001]
module.generic-import-service-klm.aws_alb_target_group.default[0]: Refreshing state... [id=arn:aws:elasticloadbalancing:eu-central-1:911184320458:targetgroup/import-prod-generic-rest-i-fe95b/df74fb044cda12c0]
module.ag5-devtools-submit-secad-report-lambda.aws_lb_target_group.default[0]: Refreshing state... [id=arn:aws:elasticloadbalancing:eu-central-1:911184320458:targetgroup/devtools-production-submit-2c4fc/01bcc0a998fe66d7]
module.ag5-devtools-submit-secad-report-lambda.aws_cloudwatch_log_group.log_group: Refreshing state... [id=/aws/lambda/devtools-production-submit-secad-report]
module.ag5-devtools-submit-secad-report-lambda.aws_lambda_function.aws_lambda: Refreshing state... [id=devtools-production-submit-secad-report]
module.aws-config-cloudwatch-retention-check-lambda.aws_cloudwatch_log_group.log_group: Refreshing state... [id=/aws/lambda/aws-production-config-cloudwatch-retention-check]
module.generic-import-service-klm.aws_iam_role.task-execution: Refreshing state... [id=import-prod-generic-rest-import-klmcargo-iauditor-ecs-task-c9a9b]
module.filestorage.aws_security_group.default: Refreshing state... [id=sg-04604c2482e4015fd]
module.aws-config-cloudwatch-retention-check-lambda.aws_lambda_function.aws_lambda: Refreshing state... [id=aws-production-config-cloudwatch-retention-check]
module.aws-config-compliance-ecs-task-definition-checker-lambda.aws_cloudwatch_log_group.log_group: Refreshing state... [id=/aws/lambda/aws-production-config-compliance-ecs-td-checker]
module.filestorage.aws_ecs_task_definition.default: Refreshing state... [id=grimlock-filestorage-clamav]
module.aws-config-compliance-ecs-task-definition-checker-lambda.aws_lambda_function.aws_lambda: Refreshing state... [id=aws-production-config-compliance-ecs-td-checker]
module.generic-import-service-klm.aws_lb_listener_rule.default[0]: Refreshing state... [id=arn:aws:elasticloadbalancing:eu-central-1:911184320458:listener-rule/app/qr3-grimlock/34eb4ba3219fcc1e/da84298308027fbb/08717533612bee1b]
module.ag5-devtools-submit-secad-report-lambda.aws_lambda_permission.with_lb[0]: Refreshing state... [id=AllowExecutionFromlb]
module.ag5-devtools-submit-secad-report-lambda.aws_lb_listener_rule.default[0]: Refreshing state... [id=arn:aws:elasticloadbalancing:eu-central-1:911184320458:listener-rule/app/qr3-grimlock/34eb4ba3219fcc1e/da84298308027fbb/2d9d28750cedd263]
module.ag5-apis-json-generator.aws_codebuild_webhook.webhook[0]: Refreshing state... [id=ag5-apis-json-generator]
module.ag5-devtools-submit-secad-report-lambda.aws_iam_policy.lambda_basic_execution: Refreshing state... [id=arn:aws:iam::911184320458:policy/lambda_devtools-production-submit-secad-report_execution]
module.aws-config-cloudwatch-retention-check-lambda.aws_iam_policy.lambda_basic_execution: Refreshing state... [id=arn:aws:iam::911184320458:policy/lambda_aws-production-config-cloudwatch-retention-check_execution]
module.aws-config-compliance-ecs-task-definition-checker-lambda.aws_iam_policy.lambda_basic_execution: Refreshing state... [id=arn:aws:iam::911184320458:policy/lambda_aws-production-config-compliance-ecs-td-checker_execution]
module.ag5-devtools-submit-secad-report-lambda.aws_lb_target_group_attachment.default[0]: Refreshing state... [id=arn:aws:elasticloadbalancing:eu-central-1:911184320458:targetgroup/devtools-production-submit-2c4fc/01bcc0a998fe66d7-20221121142317187200000001]
aws_lambda_permission.aws-config-cloudwatch-retention-check-lambda-invoke: Refreshing state... [id=AllowExecutionFromAWSConfig]
aws_lambda_permission.aws-config-compliance-ecs-task-definition-checker-lambda-invoke: Refreshing state... [id=AllowExecutionFromAWSConfig]
module.prod_sftp_service.aws_iam_role.task-execution: Refreshing state... [id=import-prod-sftp-default-ecs-task-execution]
module.prod_sftp_service.aws_iam_role.task[0]: Refreshing state... [id=import-prod-sftp-default-ecs-task]
module.sftp-server-key.aws_ssm_parameter.parameter: Refreshing state... [id=/import/sftp/prod/server/private-key]
module.filestorage.aws_ecs_service.filestorage: Refreshing state... [id=arn:aws:ecs:eu-central-1:911184320458:service/QR3GrimlockCluster/filestorage2]
module.ag5-devtools-submit-secad-report-lambda.aws_iam_role_policy_attachment.iam_role_policies[0]: Refreshing state... [id=devtools-production-submit-secad-report_lambda-role-20221122094011112500000001]
module.ag5-devtools-submit-secad-report-lambda.aws_iam_role_policy_attachment.iam_role_policies[1]: Refreshing state... [id=devtools-production-submit-secad-report_lambda-role-20221121125710895000000001]
module.aws-config-cloudwatch-retention-check-lambda.aws_iam_role_policy_attachment.iam_role_policies[1]: Refreshing state... [id=aws-production-config-cloudwatch-retention-check_lambda-role-20221123085543404300000003]
module.aws-config-cloudwatch-retention-check-lambda.aws_iam_role_policy_attachment.iam_role_policies[3]: Refreshing state... [id=aws-production-config-cloudwatch-retention-check_lambda-role-20221123093535159900000002]
module.aws-config-cloudwatch-retention-check-lambda.aws_iam_role_policy_attachment.iam_role_policies[2]: Refreshing state... [id=aws-production-config-cloudwatch-retention-check_lambda-role-20221123093535018500000001]
module.aws-config-cloudwatch-retention-check-lambda.aws_iam_role_policy_attachment.iam_role_policies[0]: Refreshing state... [id=aws-production-config-cloudwatch-retention-check_lambda-role-20221123085543316900000002]
module.json_schema_store_bucket.aws_iam_policy.write-policy: Refreshing state... [id=arn:aws:iam::911184320458:policy/schemas-json-schemas-store-allow-read-write]
module.json_schema_store_bucket.aws_iam_policy.read-policy: Refreshing state... [id=arn:aws:iam::911184320458:policy/schemas-json-schemas-store-allow-read]
module.json_schema_store_bucket.aws_s3_bucket_public_access_block.block-public-access: Refreshing state... [id=schemas-json-schemas-store]
module.json_schema_store_bucket.aws_s3_bucket_ownership_controls.bucket_ownership_controls: Refreshing state... [id=schemas-json-schemas-store]
module.aws-config-compliance-ecs-task-definition-checker-lambda.aws_iam_role_policy_attachment.iam_role_policies[1]: Refreshing state... [id=aws-production-config-compliance-ecs-td-checker_lambda-role-20221123093535537000000003]
module.aws-config-compliance-ecs-task-definition-checker-lambda.aws_iam_role_policy_attachment.iam_role_policies[0]: Refreshing state... [id=aws-production-config-compliance-ecs-td-checker_lambda-role-20221123093535558700000004]
module.parameters_store_backup_bucket.aws_iam_policy.write-policy: Refreshing state... [id=arn:aws:iam::911184320458:policy/backup-parametersstorebackup-allow-read-write]
module.parameters_store_backup_bucket.aws_iam_policy.read-policy: Refreshing state... [id=arn:aws:iam::911184320458:policy/backup-parametersstorebackup-allow-read]
module.parameters_store_backup_bucket.aws_s3_bucket_ownership_controls.bucket_ownership_controls: Refreshing state... [id=backup-parametersstorebackup]
module.parameters_store_backup_bucket.aws_s3_bucket_public_access_block.block-public-access: Refreshing state... [id=backup-parametersstorebackup]
module.sftp-server-key.aws_iam_policy.read-policy: Refreshing state... [id=arn:aws:iam::911184320458:policy/parameter-import-prod-sftp-server-private-key-allow-read]
module.parameters_store_backup.aws_codebuild_project.code_build_project: Refreshing state... [id=arn:aws:codebuild:eu-central-1:911184320458:project/parametersstorebackup]
module.prod_sftp_service.aws_ecs_task_definition.default: Refreshing state... [id=import-prod-sftp-default_v20]
module.ag5-apis-json-generator.aws_iam_role_policy_attachment.iam_provided_policies_attachment["invoke-slack-notifier"]: Refreshing state... [id=codebuild-ag5-apis-json-generator-service-role-20221115134919298000000002]
module.ag5-apis-json-generator.aws_iam_role_policy_attachment.iam_provided_policies_attachment["pull-ecr-image"]: Refreshing state... [id=codebuild-ag5-apis-json-generator-service-role-20221115134919329900000004]
module.ag5-apis-json-generator.aws_iam_role_policy_attachment.iam_provided_policies_attachment["json_schema_store-s3-rw"]: Refreshing state... [id=codebuild-ag5-apis-json-generator-service-role-20221115134919322300000003]
module.parameters_store_backup.aws_iam_role_policy_attachment.iam_provided_policies_attachment["invoke-slack-notifier"]: Refreshing state... [id=codebuild-parametersstorebackup-service-role-20221116092611246500000004]
module.parameters_store_backup.aws_iam_role_policy_attachment.iam_provided_policies_attachment["parameters_store-s3-rw"]: Refreshing state... [id=codebuild-parametersstorebackup-service-role-20221116092611251100000005]
module.parameters_store_backup.aws_iam_role_policy_attachment.iam_provided_policies_attachment["pull-ecr-image"]: Refreshing state... [id=codebuild-parametersstorebackup-service-role-20221116092611222800000002]
module.parameters_store_backup.aws_iam_role_policy_attachment.iam_provided_policies_attachment["ssm-read-only"]: Refreshing state... [id=codebuild-parametersstorebackup-service-role-20221116092611239900000003]
module.prod_sftp_service.aws_ecs_service.default: Refreshing state... [id=arn:aws:ecs:eu-central-1:911184320458:service/QR3GrimlockCluster/import-prod-sftp-default]
module.parameters_store_backup.aws_iam_policy.build_trigger_policy[0]: Refreshing state... [id=arn:aws:iam::911184320458:policy/service-role/CodeBuildTrigger-parametersstorebackup-eu-central-1]
module.parameters_store_backup.aws_cloudwatch_event_target.trigger_event_target["run-daily-backups"]: Refreshing state... [id=run-daily-backups-terraform-20221116134145934400000001]
module.parameters_store_backup.aws_iam_role_policy_attachment.build_trigger_policy_attachment[0]: Refreshing state... [id=codebuild-parametersstorebackup-trigger-20221116092621487300000006]
module.kangaroo_prod.google_service_account.kangaroo_service_account: Refreshing state... [id=projects/ag5-team-platform/serviceAccounts/seaspray-prod-kangaroo@ag5-team-platform.iam.gserviceaccount.com]
module.kangaroo_prod.google_pubsub_topic.kangaroo_pubsub_topic: Refreshing state... [id=projects/ag5-team-platform/topics/seaspray-prod-kangaroo-pubsub-topic]
module.kangaroo_test.google_pubsub_topic.kangaroo_pubsub_topic: Refreshing state... [id=projects/ag5-team-platform/topics/seaspray-dev-kangaroo-pubsub-topic]
module.kangaroo_test.google_service_account.kangaroo_service_account: Refreshing state... [id=projects/ag5-team-platform/serviceAccounts/seaspray-dev-kangaroo@ag5-team-platform.iam.gserviceaccount.com]
module.kangaroo_prod.google_pubsub_topic_iam_binding.binding: Refreshing state... [id=projects/ag5-team-platform/topics/seaspray-prod-kangaroo-pubsub-topic/roles/pubsub.publisher]
module.kangaroo_test.google_pubsub_topic_iam_binding.binding: Refreshing state... [id=projects/ag5-team-platform/topics/seaspray-dev-kangaroo-pubsub-topic/roles/pubsub.publisher]
module.prod_pippi-service_courageous-parrot.aws_s3_bucket.inbound: Refreshing state... [id=pippi-prod-inbound-queue-courageous-parrot]
module.prod_pippi-service_courageous-parrot.aws_s3_bucket.failure: Refreshing state... [id=pippi-prod-failures-queue-courageous-parrot]
module.prod_pippi-service_courageous-parrot.aws_sqs_queue.failure: Refreshing state... [id=https://sqs.eu-central-1.amazonaws.com/911184320458/pippi_prod_failures_courageous-parrot]
module.prod_pippi-service_courageous-parrot.aws_sqs_queue.inbound: Refreshing state... [id=https://sqs.eu-central-1.amazonaws.com/911184320458/pippi_prod_inbound_courageous-parrot]
module.siem_enricher.module.lambda.aws_iam_role.aws_lambda_role: Refreshing state... [id=siem-global-siem-enricher_lambda-role]
module.aws_event_siemyfier.module.lambda.aws_iam_role.aws_lambda_role: Refreshing state... [id=siem-global-aws-event-siemyfier_lambda-role]
module.siem_enricher.module.inbound_queue.aws_sqs_queue.queue: Refreshing state... [id=https://sqs.eu-central-1.amazonaws.com/911184320458/siem-global-siem-event-enricher-inbound]
module.siem_enricher.module.lambda.aws_cloudwatch_log_group.log_group: Refreshing state... [id=/aws/lambda/siem-global-siem-enricher]
module.siem_enricher.module.lambda.aws_lambda_function.aws_lambda: Refreshing state... [id=siem-global-siem-enricher]
module.prod_scim_fearless-sturgeon.module.scim-service.aws_alb_target_group.default[0]: Refreshing state... [id=arn:aws:elasticloadbalancing:eu-central-1:911184320458:targetgroup/auth-prod-scim-fearless-sturgeon/df210d9ec043a668]
module.aws_event_siemyfier.module.lambda.aws_cloudwatch_log_group.log_group: Refreshing state... [id=/aws/lambda/siem-global-aws-event-siemyfier]
module.aws_event_siemyfier.module.inbound_queue.aws_sqs_queue.queue: Refreshing state... [id=https://sqs.eu-central-1.amazonaws.com/911184320458/siem-global-aws-event-siemyfier-inbound]
module.prod_sso_lovely-squirrel.module.sso-service.aws_alb_target_group.default[0]: Refreshing state... [id=arn:aws:elasticloadbalancing:eu-central-1:911184320458:targetgroup/auth-global-sso-lovely-squirrel/82bf4ee681dbd792]
module.prod_hemingway_brave-mclaren.module.hemingway-service.aws_alb_target_group.grpc[0]: Refreshing state... [id=arn:aws:elasticloadbalancing:eu-central-1:911184320458:targetgroup/email-prod-hemingway-brave-d1085/8263ea544613f01a]
module.kangaroo_test.module.siem_queue.aws_sqs_queue.queue: Refreshing state... [id=https://sqs.eu-central-1.amazonaws.com/911184320458/seaspray-dev-siem-event-inbound]
module.parq-fetcher_test.module.parq-fetcher-service.aws_iam_role.task-execution: Refreshing state... [id=seaspray-dev-parq-fetcher-parq-fetchertest-ecs-task-execution]
module.parq-fetcher_test.module.parq-fetcher-service.aws_iam_role.task[0]: Refreshing state... [id=seaspray-dev-parq-fetcher-parq-fetchertest-ecs-task]
module.prod_scim_berserk-panini.module.scim-service.aws_alb_target_group.default[0]: Refreshing state... [id=arn:aws:elasticloadbalancing:eu-central-1:911184320458:targetgroup/auth-prod-scim-berserk-panini/f39ec305833251d5]
module.kangaroo_prod.module.siem_queue.aws_sqs_queue.queue: Refreshing state... [id=https://sqs.eu-central-1.amazonaws.com/911184320458/seaspray-prod-siem-event-inbound]
module.kangaroo_prod.module.kangaroo-service.aws_iam_role.task-execution: Refreshing state... [id=seaspray-prod-kangaroo-ecs-task-execution]
module.global_auth-service_juicy-jaguar.module.auth-service.aws_alb_target_group.default[0]: Refreshing state... [id=arn:aws:elasticloadbalancing:eu-central-1:911184320458:targetgroup/auth-global-smalltalk-juic-dc1dc/e46977aea2bc1514]
module.dev_holysheet_clever-austin.module.holysheet-service.aws_alb_target_group.default[0]: Refreshing state... [id=arn:aws:elasticloadbalancing:eu-central-1:911184320458:targetgroup/reports-dev-holysheet-clev-9a7c9/f65e77c39a516878]
module.acceptance_olympus-lms-import_faithful-alligator.module.olympus-lms-import-service.aws_alb_target_group.default[0]: Refreshing state... [id=arn:aws:elasticloadbalancing:eu-central-1:911184320458:targetgroup/import-acceptance-public-p-502b7/f313466507db820f]
module.global_auth-service_juicy-jaguar.module.auth-service.aws_iam_role.task[0]: Refreshing state... [id=auth-global-smalltalk-juicy-jaguar-ecs-task]
module.global_auth-service_juicy-jaguar.module.auth-service.aws_iam_role.task-execution: Refreshing state... [id=auth-global-smalltalk-juicy-jaguar-ecs-task-execution]
module.kangaroo_test.module.kangaroo-service.aws_iam_role.task-execution: Refreshing state... [id=seaspray-dev-kangaroo-ecs-task-execution]
module.prod_pippi-service_courageous-parrot.module.pippi-service.aws_iam_role.task-execution: Refreshing state... [id=import-prod-pippi-courageous-parrot-ecs-task-execution]
module.dev_auth-support-service.module.auth-support-service.aws_alb_target_group.default[0]: Refreshing state... [id=arn:aws:elasticloadbalancing:eu-central-1:911184320458:targetgroup/auth-global-auth-support-s-64e77/16347e2c9ead8059]
module.prod_scim_fearless-sturgeon.module.scim-service.aws_iam_role.task-execution: Refreshing state... [id=auth-prod-scim-fearless-sturgeon-ecs-task-execution]
module.prod_hemingway_brave-mclaren.module.hemingway-service.aws_iam_role.task-execution: Refreshing state... [id=email-prod-hemingway-brave-mclaren-ecs-task-execution]
module.prod_sso_lovely-squirrel.module.sso-service.aws_iam_role.task-execution: Refreshing state... [id=auth-global-sso-lovely-squirrel-ecs-task-execution]
module.prod_sso_lovely-squirrel.module.sso-service.aws_iam_role.task[0]: Refreshing state... [id=auth-global-sso-lovely-squirrel-ecs-task]
module.prod_scim_berserk-panini.module.scim-service.aws_iam_role.task-execution: Refreshing state... [id=auth-prod-scim-berserk-panini-ecs-task-execution]
module.dev_holysheet_clever-austin.module.holysheet-service.aws_iam_role.task-execution: Refreshing state... [id=reports-dev-holysheet-clever-austin-ecs-task-execution]
module.siem_enricher.module.inbound_queue.aws_iam_policy.receive_policy: Refreshing state... [id=arn:aws:iam::911184320458:policy/siem-global-siem-event-enricher-inbound-receive-policy]
module.acceptance_olympus-lms-import_faithful-alligator.module.olympus-lms-import-service.aws_iam_role.task-execution: Refreshing state... [id=import-acceptance-public-parq-import-faithful-alligator-ec-11eea]
module.acceptance_olympus-lms-import_faithful-alligator.module.olympus-lms-import-service.aws_iam_role.task[0]: Refreshing state... [id=import-acceptance-public-parq-import-faithful-alligator-ecs-task]
module.siem_enricher.module.inbound_queue.aws_sns_topic_subscription.sns_subscription[0]: Refreshing state... [id=arn:aws:sns:eu-central-1:911184320458:siem-global-raw-siem-events:5a57d424-6d31-437c-b781-0447063404ef]
module.siem_enricher.module.inbound_queue.data.aws_iam_policy_document.sns_to_sqs_policy[0]: Reading...
module.siem_enricher.module.inbound_queue.data.aws_iam_policy_document.sns_to_sqs_policy[0]: Read complete after 0s [id=2924177016]
module.siem_enricher.module.inbound_queue.aws_iam_policy.send_policy: Refreshing state... [id=arn:aws:iam::911184320458:policy/siem-global-siem-event-enricher-inbound-send-policy]
module.siem_enricher.module.lambda.aws_iam_policy.lambda_basic_execution: Refreshing state... [id=arn:aws:iam::911184320458:policy/lambda_siem-global-siem-enricher_execution]
module.aws_event_siemyfier.module.lambda.aws_iam_policy.lambda_basic_execution: Refreshing state... [id=arn:aws:iam::911184320458:policy/lambda_siem-global-aws-event-siemyfier_execution]
module.aws_event_siemyfier.module.inbound_queue.aws_sns_topic_subscription.sns_subscription[0]: Refreshing state... [id=arn:aws:sns:eu-central-1:911184320458:siem-global-aws-events:4517d21f-c6f2-4c28-b37e-713a1799fd15]
module.aws_event_siemyfier.module.inbound_queue.aws_iam_policy.send_policy: Refreshing state... [id=arn:aws:iam::911184320458:policy/siem-global-aws-event-siemyfier-inbound-send-policy]
module.aws_event_siemyfier.module.inbound_queue.aws_iam_policy.receive_policy: Refreshing state... [id=arn:aws:iam::911184320458:policy/siem-global-aws-event-siemyfier-inbound-receive-policy]
module.kangaroo_test.module.siem_queue.aws_sns_topic_subscription.sns_subscription[0]: Refreshing state... [id=arn:aws:sns:eu-central-1:911184320458:siem-global-siem-events:6a384a5f-d400-4285-9331-8cfb9503fc91]
module.kangaroo_test.module.siem_queue.data.aws_iam_policy_document.sns_to_sqs_policy[0]: Reading...
module.kangaroo_test.module.siem_queue.data.aws_iam_policy_document.sns_to_sqs_policy[0]: Read complete after 0s [id=2580760728]
module.kangaroo_test.module.siem_queue.aws_iam_policy.send_policy: Refreshing state... [id=arn:aws:iam::911184320458:policy/seaspray-dev-siem-event-inbound-send-policy]
module.kangaroo_test.module.siem_queue.aws_iam_policy.receive_policy: Refreshing state... [id=arn:aws:iam::911184320458:policy/seaspray-dev-siem-event-inbound-receive-policy]
module.prod_scim_fearless-sturgeon.module.scim-service.aws_lb_listener_rule.default[0]: Refreshing state... [id=arn:aws:elasticloadbalancing:eu-central-1:911184320458:listener-rule/app/qr3-grimlock/34eb4ba3219fcc1e/da84298308027fbb/047d7396d5579c76]
module.prod_pippi-service_courageous-parrot.aws_s3_bucket_public_access_block.pippi-inbound-prod: Refreshing state... [id=pippi-prod-inbound-queue-courageous-parrot]
module.prod_pippi-service_courageous-parrot.aws_iam_policy.allow-submit-record: Refreshing state... [id=arn:aws:iam::911184320458:policy/import-prod-pippi-courageous-parrot_record-producer]
module.prod_sso_lovely-squirrel.module.sso-service.aws_lb_listener_rule.default[0]: Refreshing state... [id=arn:aws:elasticloadbalancing:eu-central-1:911184320458:listener-rule/app/qr3-grimlock/34eb4ba3219fcc1e/da84298308027fbb/2cbb067f8f72ef3a]
module.prod_hemingway_brave-mclaren.module.hemingway-service.aws_lb_listener_rule.grpc[0]: Refreshing state... [id=arn:aws:elasticloadbalancing:eu-central-1:911184320458:listener-rule/app/qr3-private/77d1fbbf8e55d03f/93a9ac52456b118e/52a6845d71864dc1]
module.prod_pippi-service_courageous-parrot.aws_s3_bucket_public_access_block.pippi-failure-prod: Refreshing state... [id=pippi-prod-failures-queue-courageous-parrot]
module.prod_pippi-service_courageous-parrot.aws_iam_policy.queue-access-policy: Refreshing state... [id=arn:aws:iam::911184320458:policy/import-prod-pippi-courageous-parrot_queue-access]
module.kangaroo_prod.module.siem_queue.aws_sns_topic_subscription.sns_subscription[0]: Refreshing state... [id=arn:aws:sns:eu-central-1:911184320458:siem-global-siem-events:d31d51fa-ab71-49a2-878a-de877a05f74f]
module.kangaroo_prod.module.siem_queue.data.aws_iam_policy_document.sns_to_sqs_policy[0]: Reading...
module.kangaroo_prod.module.siem_queue.data.aws_iam_policy_document.sns_to_sqs_policy[0]: Read complete after 0s [id=4066046946]
module.kangaroo_prod.module.siem_queue.aws_iam_policy.receive_policy: Refreshing state... [id=arn:aws:iam::911184320458:policy/seaspray-prod-siem-event-inbound-receive-policy]
module.kangaroo_prod.module.siem_queue.aws_iam_policy.send_policy: Refreshing state... [id=arn:aws:iam::911184320458:policy/seaspray-prod-siem-event-inbound-send-policy]
module.parq-fetcher_test.module.parq-fetcher-service.aws_ecs_task_definition.default: Refreshing state... [id=seaspray-dev-parq-fetcher-parq-fetchertest_v0-1-10]
module.prod_scim_berserk-panini.module.scim-service.aws_lb_listener_rule.default[0]: Refreshing state... [id=arn:aws:elasticloadbalancing:eu-central-1:911184320458:listener-rule/app/qr3-grimlock/34eb4ba3219fcc1e/da84298308027fbb/f6e0652ac084989e]
module.dev_auth-support-service.module.auth-support-service.aws_iam_role.task[0]: Refreshing state... [id=auth-global-auth-support-super-parakeet-ecs-task]
module.dev_auth-support-service.module.auth-support-service.aws_iam_role.task-execution: Refreshing state... [id=auth-global-auth-support-super-parakeet-ecs-task-execution]
module.global_auth-service_juicy-jaguar.module.auth-service.aws_lb_listener_rule.default[0]: Refreshing state... [id=arn:aws:elasticloadbalancing:eu-central-1:911184320458:listener-rule/app/qr3-grimlock/34eb4ba3219fcc1e/da84298308027fbb/b9a0cc1d472954cd]
module.dev_holysheet_clever-austin.module.holysheet-service.aws_lb_listener_rule.private[0]: Refreshing state... [id=arn:aws:elasticloadbalancing:eu-central-1:911184320458:listener-rule/app/qr3-private/77d1fbbf8e55d03f/93a9ac52456b118e/5880ef619b244d61]
module.acceptance_olympus-lms-import_faithful-alligator.module.olympus-lms-import-service.aws_lb_listener_rule.default[0]: Refreshing state... [id=arn:aws:elasticloadbalancing:eu-central-1:911184320458:listener-rule/app/qr3-grimlock/34eb4ba3219fcc1e/da84298308027fbb/7bebd5729f67061a]
module.global_auth-service_juicy-jaguar.module.auth-service.aws_ecs_task_definition.default: Refreshing state... [id=auth-global-smalltalk-juicy-jaguar_B259-Auth1-9]
module.dev_auth-support-service.module.auth-support-service.aws_lb_listener_rule.default[0]: Refreshing state... [id=arn:aws:elasticloadbalancing:eu-central-1:911184320458:listener-rule/app/qr3-grimlock/34eb4ba3219fcc1e/da84298308027fbb/03dad7cd76a51f84]
module.siem_enricher.module.inbound_queue.aws_sqs_queue_policy.ag5_siem_sns_ingester_test_allow_submit[0]: Refreshing state... [id=https://sqs.eu-central-1.amazonaws.com/911184320458/siem-global-siem-event-enricher-inbound]
module.prod_scim_fearless-sturgeon.module.scim-service.aws_ecs_task_definition.default: Refreshing state... [id=auth-prod-scim-fearless-sturgeon_v3-0-5]
module.prod_hemingway_brave-mclaren.module.hemingway-service.aws_ecs_task_definition.default: Refreshing state... [id=email-prod-hemingway-brave-mclaren_v0-2-4]
module.aws_event_siemyfier.module.inbound_queue.aws_sqs_queue_policy.ag5_siem_sns_ingester_test_allow_submit[0]: Refreshing state... [id=https://sqs.eu-central-1.amazonaws.com/911184320458/siem-global-aws-event-siemyfier-inbound]
module.prod_sso_lovely-squirrel.module.sso-service.aws_ecs_task_definition.default: Refreshing state... [id=auth-global-sso-lovely-squirrel_v0-1-16]
module.prod_scim_berserk-panini.module.scim-service.aws_ecs_task_definition.default: Refreshing state... [id=auth-prod-scim-berserk-panini_v3-0-5]
module.kangaroo_test.module.siem_queue.aws_sqs_queue_policy.ag5_siem_sns_ingester_test_allow_submit[0]: Refreshing state... [id=https://sqs.eu-central-1.amazonaws.com/911184320458/seaspray-dev-siem-event-inbound]
module.dev_holysheet_clever-austin.module.holysheet-service.aws_ecs_task_definition.default: Refreshing state... [id=reports-dev-holysheet-clever-austin_v0-0-2]
module.acceptance_olympus-lms-import_faithful-alligator.module.olympus-lms-import-service.aws_ecs_task_definition.default: Refreshing state... [id=import-acceptance-public-parq-import-faithful-alligator_v0-1-4]
module.kangaroo_prod.module.siem_queue.aws_sqs_queue_policy.ag5_siem_sns_ingester_test_allow_submit[0]: Refreshing state... [id=https://sqs.eu-central-1.amazonaws.com/911184320458/seaspray-prod-siem-event-inbound]
module.siem_enricher.module.lambda.aws_lambda_event_source_mapping.lambda_trigger[0]: Refreshing state... [id=a5267548-ada4-4fb3-8641-e20fe7cbd9d0]
module.parq-fetcher_test.module.parq-fetcher-service.aws_ecs_service.default: Refreshing state... [id=arn:aws:ecs:eu-central-1:911184320458:service/QR3GrimlockCluster/seaspray-dev-parq-fetcher-parq-fetchertest]
module.dev_auth-support-service.module.auth-support-service.aws_ecs_task_definition.default: Refreshing state... [id=auth-global-auth-support-super-parakeet_v1-10-33]
module.global_auth-service_juicy-jaguar.module.auth-service.aws_ecs_service.default: Refreshing state... [id=arn:aws:ecs:eu-central-1:911184320458:service/QR3GrimlockCluster/auth-global-smalltalk-juicy-jaguar]
module.prod_scim_fearless-sturgeon.module.scim-service.aws_ecs_service.default: Refreshing state... [id=arn:aws:ecs:eu-central-1:911184320458:service/QR3GrimlockCluster/auth-prod-scim-fearless-sturgeon]
module.prod_hemingway_brave-mclaren.module.hemingway-service.aws_ecs_service.default: Refreshing state... [id=arn:aws:ecs:eu-central-1:911184320458:service/QR3GrimlockCluster/email-prod-hemingway-brave-mclaren]
module.prod_scim_berserk-panini.module.scim-service.aws_ecs_service.default: Refreshing state... [id=arn:aws:ecs:eu-central-1:911184320458:service/QR3GrimlockCluster/auth-prod-scim-berserk-panini]
module.prod_sso_lovely-squirrel.module.sso-service.aws_ecs_service.default: Refreshing state... [id=arn:aws:ecs:eu-central-1:911184320458:service/QR3GrimlockCluster/auth-global-sso-lovely-squirrel]
module.dev_holysheet_clever-austin.module.holysheet-service.aws_ecs_service.default: Refreshing state... [id=arn:aws:ecs:eu-central-1:911184320458:service/QR3GrimlockCluster/reports-dev-holysheet-clever-austin]
module.acceptance_olympus-lms-import_faithful-alligator.module.olympus-lms-import-service.aws_ecs_service.default: Refreshing state... [id=arn:aws:ecs:eu-central-1:911184320458:service/QR3GrimlockCluster/import-acceptance-public-parq-import-faithful-alligator]
module.dev_auth-support-service.module.auth-support-service.aws_ecs_service.default: Refreshing state... [id=arn:aws:ecs:eu-central-1:911184320458:service/QR3GrimlockCluster/auth-global-auth-support-super-parakeet]
module.siem_enricher.module.lambda.aws_iam_role_policy_attachment.iam_role_policies[3]: Refreshing state... [id=siem-global-siem-enricher_lambda-role-20221121125711630800000002]
module.siem_enricher.module.lambda.aws_iam_role_policy_attachment.iam_role_policies[2]: Refreshing state... [id=siem-global-siem-enricher_lambda-role-20221122094012131600000002]
module.siem_enricher.module.lambda.aws_iam_role_policy_attachment.iam_role_policies[1]: Refreshing state... [id=siem-global-siem-enricher_lambda-role-20221118145659665700000002]
module.siem_enricher.module.lambda.aws_iam_role_policy_attachment.iam_role_policies[0]: Refreshing state... [id=siem-global-siem-enricher_lambda-role-20221121104519425700000001]
module.aws_event_siemyfier.module.lambda.aws_iam_role_policy_attachment.iam_role_policies[2]: Refreshing state... [id=siem-global-aws-event-siemyfier_lambda-role-20221124084040019400000001]
module.aws_event_siemyfier.module.lambda.aws_iam_role_policy_attachment.iam_role_policies[1]: Refreshing state... [id=siem-global-aws-event-siemyfier_lambda-role-20221124084040061900000003]
module.aws_event_siemyfier.module.lambda.aws_iam_role_policy_attachment.iam_role_policies[0]: Refreshing state... [id=siem-global-aws-event-siemyfier_lambda-role-20221124084040055800000002]
module.prod_pippi-service_courageous-parrot.module.pippi-service.aws_iam_role.task[0]: Refreshing state... [id=import-prod-pippi-courageous-parrot-ecs-task]
module.generic-import-service-klm.aws_iam_role.task[0]: Refreshing state... [id=import-prod-generic-rest-import-klmcargo-iauditor-ecs-task]
module.kangaroo_test.module.kangaroo-service.aws_iam_role.task[0]: Refreshing state... [id=seaspray-dev-kangaroo-ecs-task]
module.kangaroo_prod.module.kangaroo-service.aws_iam_role.task[0]: Refreshing state... [id=seaspray-prod-kangaroo-ecs-task]
module.prod_pippi-service_courageous-parrot.module.pippi-service.aws_ecs_task_definition.default: Refreshing state... [id=import-prod-pippi-courageous-parrot_v0-0-21]
module.generic-import-service-klm.aws_ecs_task_definition.default: Refreshing state... [id=import-prod-generic-rest-import-klmcargo-iauditor_v0-0-3]
module.kangaroo_test.module.kangaroo-service.aws_ecs_task_definition.default: Refreshing state... [id=seaspray-dev-kangaroo_v0-3-3]
module.kangaroo_prod.module.kangaroo-service.aws_ecs_task_definition.default: Refreshing state... [id=seaspray-prod-kangaroo_v0-2-7]
module.prod_pippi-service_courageous-parrot.module.pippi-service.aws_ecs_service.default: Refreshing state... [id=arn:aws:ecs:eu-central-1:911184320458:service/QR3GrimlockCluster/import-prod-pippi-courageous-parrot]
module.generic-import-service-klm.aws_ecs_service.default: Refreshing state... [id=arn:aws:ecs:eu-central-1:911184320458:service/QR3GrimlockCluster/import-prod-generic-rest-import-klmcargo-iauditor]
module.kangaroo_test.module.kangaroo-service.aws_ecs_service.default: Refreshing state... [id=arn:aws:ecs:eu-central-1:911184320458:service/QR3GrimlockCluster/seaspray-dev-kangaroo]
module.kangaroo_prod.module.kangaroo-service.aws_ecs_service.default: Refreshing state... [id=arn:aws:ecs:eu-central-1:911184320458:service/QR3GrimlockCluster/seaspray-prod-kangaroo]

Note: Objects have changed outside of Terraform

Terraform detected the following changes made outside of Terraform since the
last "terraform apply" which may have affected this plan:

  # module.aws_event_siemyfier.module.lambda.aws_iam_role.aws_lambda_role has changed
  ~ resource "aws_iam_role" "aws_lambda_role" {
        id                    = "siem-global-aws-event-siemyfier_lambda-role"
      ~ managed_policy_arns   = [
          + "arn:aws:iam::911184320458:policy/lambda_siem-global-aws-event-siemyfier_execution",
          + "arn:aws:iam::911184320458:policy/siem-global-aws-event-siemyfier-inbound-receive-policy",
          + "arn:aws:iam::911184320458:policy/siem-global-raw-siem-events_publish_policy",
        ]
        name                  = "siem-global-aws-event-siemyfier_lambda-role"
      + tags                  = {}
        # (8 unchanged attributes hidden)

        # (1 unchanged block hidden)
    }


Unless you have made equivalent changes to your configuration, or ignored the
relevant attributes using ignore_changes, the following plan may include
actions to undo or respond to these changes.

─────────────────────────────────────────────────────────────────────────────

Terraform used the selected providers to generate the following execution
plan. Resource actions are indicated with the following symbols:
  + create
  ~ update in-place
 <= read (data resources)

Terraform will perform the following actions:

  # module.ag5-devtools-submit-secad-report-ecr.aws_ecr_repository.repository will be updated in-place
  ~ resource "aws_ecr_repository" "repository" {
        id                   = "devtools-submit-secad-report-lambda"
        name                 = "devtools-submit-secad-report-lambda"
      ~ tags                 = {
          ~ "name"       = "devtools-submit-secad-report" -> "devtools-submit-secad-report-lambda"
            # (3 unchanged elements hidden)
        }
      ~ tags_all             = {
          ~ "name"       = "devtools-submit-secad-report" -> "devtools-submit-secad-report-lambda"
            # (3 unchanged elements hidden)
        }
        # (4 unchanged attributes hidden)

        # (2 unchanged blocks hidden)
    }

  # module.aws-config-cloudwatch-retention-check-ecr.aws_ecr_repository.repository will be updated in-place
  ~ resource "aws_ecr_repository" "repository" {
        id                   = "aws-config-cloudwatch-retention-check-lambda"
        name                 = "aws-config-cloudwatch-retention-check-lambda"
      ~ tags                 = {
          ~ "name"       = "aws-config-cloudwatch-retention-check" -> "aws-config-cloudwatch-retention-check-lambda"
          ~ "namespace"  = "aws" -> "aws-config"
            # (2 unchanged elements hidden)
        }
      ~ tags_all             = {
          ~ "name"       = "aws-config-cloudwatch-retention-check" -> "aws-config-cloudwatch-retention-check-lambda"
          ~ "namespace"  = "aws" -> "aws-config"
            # (2 unchanged elements hidden)
        }
        # (4 unchanged attributes hidden)

        # (2 unchanged blocks hidden)
    }

  # module.aws-config-compliance-ecs-task-definition-checker-ecr.aws_ecr_repository.repository will be updated in-place
  ~ resource "aws_ecr_repository" "repository" {
        id                   = "aws-config-compliance-ecs-td-checker-lambda"
        name                 = "aws-config-compliance-ecs-td-checker-lambda"
      ~ tags                 = {
          ~ "name"       = "aws-config-compliance-ecs-td-checker" -> "aws-config-compliance-ecs-td-checker-lambda"
          ~ "namespace"  = "aws" -> "aws-config"
            # (2 unchanged elements hidden)
        }
      ~ tags_all             = {
          ~ "name"       = "aws-config-compliance-ecs-td-checker" -> "aws-config-compliance-ecs-td-checker-lambda"
          ~ "namespace"  = "aws" -> "aws-config"
            # (2 unchanged elements hidden)
        }
        # (4 unchanged attributes hidden)

        # (2 unchanged blocks hidden)
    }

  # module.aws-event-siemyfier-ecr.aws_ecr_repository.repository will be updated in-place
  ~ resource "aws_ecr_repository" "repository" {
        id                   = "aws-event-siemyfier"
        name                 = "aws-event-siemyfier"
      ~ tags                 = {
          ~ "name"       = "siem-aws-event-siemyfier" -> "aws-event-siemyfier"
          ~ "namespace"  = "siem" -> "aws"
            # (2 unchanged elements hidden)
        }
      ~ tags_all             = {
          ~ "name"       = "siem-aws-event-siemyfier" -> "aws-event-siemyfier"
          ~ "namespace"  = "siem" -> "aws"
            # (2 unchanged elements hidden)
        }
        # (4 unchanged attributes hidden)

        # (2 unchanged blocks hidden)
    }

  # module.siem-enricher-ecr.aws_ecr_repository.repository will be updated in-place
  ~ resource "aws_ecr_repository" "repository" {
        id                   = "ag5-siem-enricher"
        name                 = "ag5-siem-enricher"
      ~ tags                 = {
          ~ "name"       = "siem-siem-enricher" -> "ag5-siem-enricher"
          ~ "namespace"  = "siem" -> "ag5"
            # (2 unchanged elements hidden)
        }
      ~ tags_all             = {
          ~ "name"       = "siem-siem-enricher" -> "ag5-siem-enricher"
          ~ "namespace"  = "siem" -> "ag5"
            # (2 unchanged elements hidden)
        }
        # (4 unchanged attributes hidden)

        # (2 unchanged blocks hidden)
    }

  # module.aws_event_siemyfier.module.inbound_queue.data.aws_iam_policy_document.sns_to_sqs_policy[0] will be read during apply
  # (depends on a resource or a module with changes pending)
 <= data "aws_iam_policy_document" "sns_to_sqs_policy" {
      + id   = (known after apply)
      + json = (known after apply)

      + statement {
          + actions   = [
              + "SQS:SendMessage",
            ]
          + effect    = "Allow"
          + resources = [
              + "arn:aws:sqs:eu-central-1:911184320458:siem-global-aws-event-siemyfier-inbound",
            ]

          + condition {
              + test     = "ArnEquals"
              + values   = [
                  + "arn:aws:sns:eu-central-1:911184320458:siem-global-aws-events",
                ]
              + variable = "aws:SourceArn"
            }

          + principals {
              + identifiers = [
                  + "sns.amazonaws.com",
                ]
              + type        = "Service"
            }
        }
    }

  # module.aws_event_siemyfier.module.inbound_queue.aws_sqs_queue.queue will be updated in-place
  ~ resource "aws_sqs_queue" "queue" {
        id                                = "https://sqs.eu-central-1.amazonaws.com/911184320458/siem-global-aws-event-siemyfier-inbound"
        name                              = "siem-global-aws-event-siemyfier-inbound"
      - sqs_managed_sse_enabled           = true -> null
        tags                              = {
            "managed_by" = "terraform"
            "name"       = "siem-global-aws-event-siemyfier-inbound"
            "namespace"  = "siem"
            "opex"       = "team-platform"
            "stage"      = "global"
        }
        # (12 unchanged attributes hidden)
    }

  # module.aws_event_siemyfier.module.inbound_queue.aws_sqs_queue_policy.ag5_siem_sns_ingester_test_allow_submit[0] will be updated in-place
  ~ resource "aws_sqs_queue_policy" "ag5_siem_sns_ingester_test_allow_submit" {
        id        = "https://sqs.eu-central-1.amazonaws.com/911184320458/siem-global-aws-event-siemyfier-inbound"
      ~ policy    = jsonencode(
            {
              - Statement = [
                  - {
                      - Action    = "SQS:SendMessage"
                      - Condition = {
                          - ArnEquals = {
                              - "aws:SourceArn" = "arn:aws:sns:eu-central-1:911184320458:siem-global-aws-events"
                            }
                        }
                      - Effect    = "Allow"
                      - Principal = {
                          - Service = "sns.amazonaws.com"
                        }
                      - Resource  = "arn:aws:sqs:eu-central-1:911184320458:siem-global-aws-event-siemyfier-inbound"
                      - Sid       = ""
                    },
                ]
              - Version   = "2012-10-17"
            }
        ) -> (known after apply)
        # (1 unchanged attribute hidden)
    }

  # module.aws_event_siemyfier.module.lambda.aws_lambda_event_source_mapping.lambda_trigger[0] will be created
  + resource "aws_lambda_event_source_mapping" "lambda_trigger" {
      + enabled                       = true
      + event_source_arn              = "arn:aws:sqs:eu-central-1:911184320458:siem-global-aws-event-siemyfier-inbound"
      + function_arn                  = (known after apply)
      + function_name                 = (known after apply)
      + id                            = (known after apply)
      + last_modified                 = (known after apply)
      + last_processing_result        = (known after apply)
      + maximum_record_age_in_seconds = (known after apply)
      + maximum_retry_attempts        = (known after apply)
      + parallelization_factor        = (known after apply)
      + state                         = (known after apply)
      + state_transition_reason       = (known after apply)
      + uuid                          = (known after apply)
    }

  # module.aws_event_siemyfier.module.lambda.aws_lambda_function.aws_lambda will be created
  + resource "aws_lambda_function" "aws_lambda" {
      + architectures                  = (known after apply)
      + arn                            = (known after apply)
      + function_name                  = "siem-global-aws-event-siemyfier"
      + id                             = (known after apply)
      + image_uri                      = "911184320458.dkr.ecr.eu-central-1.amazonaws.com/aws-event-siemyfier:v0.0.1"
      + invoke_arn                     = (known after apply)
      + last_modified                  = (known after apply)
      + memory_size                    = 128
      + package_type                   = "Image"
      + publish                        = false
      + qualified_arn                  = (known after apply)
      + reserved_concurrent_executions = -1
      + role                           = "arn:aws:iam::911184320458:role/siem-global-aws-event-siemyfier_lambda-role"
      + signing_job_arn                = (known after apply)
      + signing_profile_version_arn    = (known after apply)
      + source_code_hash               = (known after apply)
      + source_code_size               = (known after apply)
      + tags                           = {
          + "managed_by" = "terraform"
          + "name"       = "siem-global-aws-event-siemyfier"
          + "namespace"  = "siem"
          + "opex"       = "team-platform"
          + "stage"      = "global"
        }
      + tags_all                       = {
          + "managed_by" = "terraform"
          + "name"       = "siem-global-aws-event-siemyfier"
          + "namespace"  = "siem"
          + "opex"       = "team-platform"
          + "stage"      = "global"
        }
      + timeout                        = 3
      + version                        = (known after apply)

      + environment {
          + variables = {
              + "LOG_LEVEL"          = "DEBUG"
              + "SERVICE_NAME"       = "aws-event-siemyfier"
              + "SERVICE_VERSION"    = "v0.0.1"
              + "SIEM_SNS_TOPIC_ARN" = "arn:aws:sns:eu-central-1:911184320458:siem-global-raw-siem-events"
              + "STAGE_KEY"          = "global"
            }
        }

      + ephemeral_storage {
          + size = (known after apply)
        }

      + tracing_config {
          + mode = (known after apply)
        }

      + vpc_config {
          + security_group_ids = [
              + "sg-0e0faae487605bcb8",
            ]
          + subnet_ids         = [
              + "subnet-012ece5e32ccbce4b",
              + "subnet-06b15fa22d576b6c4",
              + "subnet-0ebd679a894768f26",
            ]
          + vpc_id             = (known after apply)
        }
    }

Plan: 2 to add, 7 to change, 0 to destroy.

─────────────────────────────────────────────────────────────────────────────

Note: You didn't use the -out option to save this plan, so Terraform can't
guarantee to take exactly these actions if you run "terraform apply" now.

Process finished with exit code 0
`

module.exports = {
    planOutput,
    planOutputWithLocalChanges
}
