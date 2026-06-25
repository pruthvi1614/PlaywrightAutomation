$json = Get-Content "test-results/results.json" | ConvertFrom-Json

$total   = $json.stats.expected + $json.stats.unexpected + $json.stats.skipped + $json.stats.flaky
$passed  = $json.stats.expected
$failed  = $json.stats.unexpected
$skipped = $json.stats.skipped

@"
Total Tests: $total
Passed: $passed
Failed: $failed
Skipped: $skipped
"@ | Out-File "test-summary.txt"